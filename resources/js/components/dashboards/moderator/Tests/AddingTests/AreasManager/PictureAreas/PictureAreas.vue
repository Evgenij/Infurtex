<template>
	<div class="image-decorator" ref="image-area">
		<div class="relative">
			<img
				class="original-image"
				:src="url"
				alt="Original Image"
				v-if="url"
			>
<!--			<div-->
<!--				class="select-areas&#45;&#45;overlay"-->
<!--				:style="{-->
<!--					opacity: opacityOverlay,-->
<!--					position: 'absolute',-->
<!--					width: originImgSize.w+'px',-->
<!--					height:  originImgSize.h+'px',-->
<!--					display: 'block'-->
<!--				}">-->
<!--			</div>-->

			<div :style="{
					'background-color': 'rgb(0,0,0)',
					width: originImgSize.w+'px',
					height: originImgSize.h+'px',
				}"
                 class="opacity-0 absolute cursor-crosshair"
				@mousedown="mouseDown"
				@mousemove="mouseMove"
			></div>

			<div v-for="item in areas" :key="item.id">
				<div @mousedown.stop.prevent="startMove(item, $event)"
					@mousemove="doMove(item, $event)">
					<div
						class="select-areas--outline absolute cursor-default"
						:style="{
							background: item.color,
							width: item.width+4+'px',
							height: item.height+4+'px',
							left: areaDisplayPosX(item)-2+'px',
							top: areaDisplayPosY(item)-2+'px',
							'z-index': item.z
						}"
					></div>
					<div
						class="select-areas--background_area cursor-move absolute"
						:style="{
							background: `white url('${url}') -${item.x}px -${item.y}px / ${originImgSize.w}px ${originImgSize.h}px no-repeat`,
							opacity: 0.7,
							width: item.width+'px',
							height: item.height+'px',
							left: areaDisplayPosX(item)+'px',
							top: areaDisplayPosY(item)+'px',
								'z-index': item.z+2
							}"
						@mouseenter="changeResizable(item.id)"
					>
					</div>

					<div class="panel-area number"
						:style="{
							height: item.height+'px',
							left: areaDisplayPosX(item)+'px',
							top: areaDisplayPosY(item)+'px',
						}">
						<span :style="{background: item.color}">
							{{item.id}}</span>
					</div>

					<div class="panel-area delete"
						:style="{
							height: item.height+'px',
							left: areaDisplayPosX(item)+(item.width-28)+'px',
							top: areaDisplayPosY(item)+'px',
						}">
						<span class="flex items-center justify-center z-10" :style="{background: item.color}"
								@click="deleteSelected(item.id)">
							<i class="bx bx-trash"></i>
                        </span>
					</div>

					<!-- resize handler -->
					<target-area
						:item="item"
						:posImg="posImg"
						:pos-correction="posCorrection"
						:color="item.color"
						@startDrag="startDrag"
						@doDrag="doDrag"
					></target-area>
				</div>
			</div>

		</div>
		<div class="c-crop--hide_main">
			<img id="c-crop--hide_img" :src="url" alt="" width="100%"/>
		</div>
	</div>
</template>

<script>
import TargetArea from "./TargetArea";
export default {
	name: "PictureAreas",
	data () {
		return {
			colorsAreas: [
				'#ff6e33',
				'#40d85c',
				'#63b3ff',
				'#d68cff',
				'#1db7a7',
				'#eacc36'
			],
			mousedown: false, // state mouse down event
			originImgSize: { // root size image
				w: 0,
				h: 0,
				r: 0
			},
			url: this.cropUrl,
			posImg: { // position box image in screen
				top: 0,
				left: 0
			},
			scrollLeft: 0,
			scrollTop: 0,
			areas: [],
			moveTempX: 0,
			moveTempY: 0,
			moveCurrentX: 0,
			moveCurrentY: 0,
			temp: 0,
			dragdown: false, // state mouse event drag,
			move: false
		}
	},
	props: {
		cropUrl: {
			type: String,
			// default: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/45585072_925043081015026_6599956628924006400_o.jpg?_nc_cat=108&_nc_oc=AQlJUcFj4S_wGeX016thVhmgINU5wDV4xPBNSCIcYSti9Sm5WEPBDYO_kxK4aRP0Emo&_nc_ht=scontent.fhan2-3.fna&oh=052bb05956a1460d014205754da5a15b&oe=5DCC1053'
			default: 'https://avatars.mds.yandex.net/i?id=e579939053592af27374094201442765-5869113-images-thumbs&n=13&exp=1'
		},
		posCorrection: {
			type: Boolean,
			default: false
		},
        listAreas: {
            type: Array,
            required: true
        }
	},
	components: {
		TargetArea
	},
	created () {
	},
    beforeMount() {
        this.areas = this.listAreas
    },
    watch: {
		cropUrl (val) {
			this.url = val
			setTimeout(() => {
				this.setSize()
			}, 200)
		},
		// send data to parent when list areas change
		areas () {
			setTimeout(() => {
				this.getListAreas()
			}, 200)
		},
        // listAreas(){
        //     console.log('picture-areas watcher', this.areas, this.listAreas)
        //     this.areas = this.listAreas
        // }
	},
	methods: {
		areaDisplayPosX (area) {
			return area.x + (this.posCorrection ? this.posImg.left : 0)
		},
		areaDisplayPosY (area) {
			return area.y + (this.posCorrection ? this.posImg.top : 0)
		},
		mousePosX (e) {
			return e.pageX - this.posImg.left
		},
		mousePosY (e) {
			return e.pageY - this.posImg.top
		},
		async setSize () {
			if (!this.url) {
				return
			}
			let imgSize = await this.getSize(this.url)
			this.originImgSize = imgSize
		},
		// Get the size of the src image
		getSize (src) {
			let _this = this
			let img = this.$el.querySelector('#c-crop--hide_img')
			return new Promise(resolve => {
				if (src && img) {
					img.onload = function () {
						// Compatible with unacceptable size
						const size = _this.getSizeImg(img)
						resolve(size)
					}
					img.src = src
				} else {
					resolve({
						w: 0,
						h: 0,
						r: 0
					})
				}
			})
		},
		getSizeImg (img) {
			let w = img.width
			let h = img.height
			let r = w === 0 && h === 0 ? 0 : w / h
			return {
				w: w,
				h: h,
				r: r
			}
		},
		calcPosOfBox () { // set posImg static
			let imageAreaRef = this.$refs['image-area']

			this.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
			this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
            let imageAreaTop, imageAreaLeft
            try {
                imageAreaTop = imageAreaRef.getBoundingClientRect().top
                imageAreaLeft = imageAreaRef.getBoundingClientRect().left
            } catch (e) {
            }


			this.posImg.top = imageAreaTop + this.scrollTop
			this.posImg.left = imageAreaLeft + this.scrollLeft
		},
		// draw rectangle on image mouseDown mouseMove mouseUp
		mouseDown (e) {
			this.mousedown = true
			let newAreaId = null

			if (this.areas.length === 0) {
				let newArea = {
					id: 1,
					x: this.mousePosX(e),
					y: this.mousePosY(e),
					color: this.colorsAreas[this.getRandomInt(0, this.colorsAreas.length)],
					width: 0,
					height: 0,
					z: 0,
					resizable: true,
                    screen: '',
                    name: '№1'
				}
				this.areas.push(newArea)
				this.temp = newArea.id
			} else if (this.areas.length <= this.colorsAreas.length) {
				// last area id + 1
				newAreaId = this.areas.slice(-1).pop().id + 1
				let newArea = {
					id: newAreaId,
					x: this.mousePosX(e),
					y: this.mousePosY(e),
					color: this.colorsAreas[this.getRandomInt(0, this.colorsAreas.length)],
					width: 0,
					height: 0,
					z: 0,
					resizable: true,
                    screen: '',
                    name: '№'+newAreaId
				}
				this.areas.push(newArea)
				this.temp = newArea.id
			}
		},

		mouseMove (e) {
			if (this.mousedown && this.areas.length <= this.colorsAreas.length) {
				this.areas.filter(x => x.id === this.temp).map(item => {
					if (e.pageX - item.x < 0 || e.pageY - item.y < 0) {
						item.width = 50
						item.height = 50
					} else {
						item.width = (e.pageX - item.x - this.posImg.left) - 8
						item.height = (e.pageY - item.y - this.posImg.top) - 8
					}
				})
			}
		},

		mouseUp () {
			this.mousedown = false
			// delete all point width is = 0
			this.areas = this.areas.filter(item => item.width !== 0 || item.height !== 0)
		},

		// after click rectangle area select active resizable and dragable
		changeResizable (id) {
			this.areas.filter(item => item.id === id).map(item => {
				item.resizable = true
				item.z = 100
			})
			this.areas.filter(item => item.id !== id).map(item => {
				item.resizable = false
				item.z = 0
			})
		},

		// delete item area
		deleteSelected (id) {
			this.areas = this.areas.filter(item => item.id !== id)
		},

		// drag point around rectangle on image startDrag doDrag endDrag
		startDrag () {
			this.dragdown = true
		},

		doDrag (item, type, e) {
			if (this.dragdown) {
				switch (type) {
					case 'sw':
						// fix drag outside box sw position
						if (e.pageX - this.posImg.left >= 0) {
							item.width = item.width + item.x - e.pageX + this.posImg.left
							item.x = e.pageX - this.posImg.left
						}
						if (e.pageY - this.posImg.top <= this.originImgSize.h) {
							item.height = e.pageY - this.posImg.top - item.y
						}
						// fix minimum area
						if (item.width < 10) {
							item.x = item.x - 10
							item.width = item.width + 10
						}
						if (item.height < 10) {
							item.height = item.height + 10
						}
						break
					case 'se':
						// fix drag outside box se position
						if (e.pageX - this.posImg.left <= this.originImgSize.w) {
							item.width = e.pageX - this.posImg.left - item.x
						}
						if (e.pageY - this.posImg.top <= this.originImgSize.h) {
							item.height = e.pageY - this.posImg.top - item.y
						}
						// fix minimum area
						if (item.width < 10) {
							item.x = item.x - 10
							item.width = item.width + 10
						}
						if (item.height < 10) {
							item.height = item.height + 10
						}
						break
					case 'ne':
						// fix drag outside box ne position
						if (e.pageX - this.posImg.left <= this.originImgSize.w) {
							item.width = e.pageX - this.posImg.left - item.x
						}
						if (e.pageY - this.posImg.top >= 0) {
							item.height = item.height + ((item.y + this.posImg.top) - e.pageY)
							item.y = e.pageY - this.posImg.top
						}
						// fix minimum area
						if (item.width < 10) {
							item.x = item.x - 10
							item.width = item.width + 10
						}
						if (item.height < 10) {
							item.height = item.height + 10
						}
						break
					case 'nw':
						// fix drag outside box nw position
						if (e.pageY - this.posImg.top >= 0) {
							item.height = item.height + ((item.y + this.posImg.top) - e.pageY)
							item.y = e.pageY - this.posImg.top
						}
						if (e.pageX - this.posImg.left >= 0) {
							item.width = item.width + item.x - e.pageX + this.posImg.left
							item.x = e.pageX - this.posImg.left
						}
						// fix minimum area
						if (item.width < 10) {
							item.x = item.x - 10
							item.width = item.width + 10
						}
						if (item.height < 10) {
							item.height = item.height + 10
						}
						break
					default:
						break
				}
			}
		},

		endDrag () {
			this.dragdown = false
		},

		// move rectangle area startMove doMove endMove
		startMove (item, e) {
			this.move = true
			this.moveTempX = e.clientX
			this.moveTempY = e.clientY
			this.moveCurrentX = item.x
			this.moveCurrentY = item.y
		},

		doMove (item, e) {
			if (this.move) {
				let x = this.moveCurrentX + (e.clientX - this.moveTempX)
				let y = this.moveCurrentY + (e.clientY - this.moveTempY)
				let maxX = this.originImgSize.w - item.width
				let maxY = this.originImgSize.h - item.height
				if (x > 0 && y > 0 && x < maxX && y < maxY) {
					item.x = x
					item.y = y
				}
			}
		},

		endMove () {
			this.move = false
		},

		// send data from child to parent $emit
		getListAreas () {
			this.$emit('getListAreas', this.areas)
		}
	},
	mounted () {
		this.setSize()
		window.addEventListener('mousemove', this.calcPosOfBox)
		window.addEventListener('scroll', this.calcPosOfBox)
		this.calcPosOfBox()
		window.addEventListener('mouseup', this.mouseUp)
		window.addEventListener('mouseup', this.endMove)
		window.addEventListener('mouseup', this.endDrag)
	}
}
</script>

<style lang="scss" scoped>
	.c-crop {
		display: inline-block;
		*{
			box-sizing: border-box;
		}
		img {
			pointer-events: none;
		}
		.c-crop--hide_main{
			width: 0;
			height: 0;
			overflow: hidden;
		}
	}
	.original-image {
		position: absolute;
		left: 0;
		width: 100%;
	}

	.panel-area{
		position: absolute;
		z-index: 110;
		display: flex;
		align-items: center;
		font-size: 12px;
		font-weight: bold;

		&.number{
			span{
				color: white;
				padding: 6px;
				border-radius: 0 4px 4px 0;
			}
		}

		&.delete{
			span{
				color: white;
				padding: 6px;
				border-radius: 4px 0 0 4px;
				cursor: pointer;
			}
		}
	}


	.select-areas {
		&--outline{
			border-radius: 4px;
		}
		&--delete_area {
			display: flex;
			align-items: center;
			justify-items: center;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjCB0SCQuXtRLQAAABRklEQVQoz4XRMUiUcQCG8V//O6MhuuEwI4VDDg9ubDCC+ILzIgcFySEnP2wOkqDRMffAa+3wpqDBSRAPp6MlC+yTFsnS0EzBursp8ECHS3AIetYXXnjfhy5B2SuJlpZPKkaEbnAJDJh33w/v7SLntpvq5uz5G69IPFWUlZGRVTQrsaK/W74o8UiftHPS+kxJVIWUkucWLHvilkO/kfdY5K2OaR+DSQfqjrWNmzFkyIxxbcdWHZpMi7xzpGNJxl29KGhY0nFk3b0gZ0cH22q2lJVtqdnGiW9ywX8Idg3qQV6sYM2aglgePQbtpDXc0avpoUhDDbFIy0vXDWuk/BH76avIpje++OW7lGs+mzBqnqAqMfWPoza9FlJOfVAy5kTTqcuuuCpnwqx9z7S7svq98MDBBVk31M3Zv7hmRMWGpqYNC0rnus8AXqJjvC9MrWIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDgtMjlUMTY6MDk6MTErMDI6MDDV30hTAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA4LTI5VDE2OjA5OjExKzAyOjAwpILw7wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=);
			background-repeat: no-repeat;
			background-position: center;
			background-color: white;
			cursor: pointer;
			border-radius: 100%;
			height: 20px;
			width: 20px;
		}
	}

	.delete-area {
		position: absolute;
		cursor: pointer;
		padding: 5px;
	}

	.image-decorator{
		*{
			-webkit-user-select: none;
			/* user-select -- это нестандартное свойство */

			-moz-user-select: none;
			/* поэтому нужны префиксы */

			-ms-user-select: none;
		}
	}
</style>
