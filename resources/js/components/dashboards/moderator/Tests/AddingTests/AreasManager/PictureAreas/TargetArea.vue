<template>
	<div class="handler">
		<!-- resize handler -->
		<div
			v-if="item.resizable"
			class="select-areas-resize-handler nw"
			:style="{
                cursor: 'nw-resize',
                'background-color': this.color,
                left: (displayPosX(item)-3)+'px',
                top: (displayPosY(item)-3)+'px',
                'z-index': item.z+10
            }"
			@mousedown.stop.prevent="startDrag(item, 'nw')"
		>
		</div>
		<div
			v-if="item.resizable"
			class="select-areas-resize-handler ne"
			:style="{
                cursor: 'ne-resize',
                'background-color': this.color,
                left: (displayPosX(item)+item.width-8)+'px',
                top: (displayPosY(item)-4)+'px',
                'z-index': item.z+10
            }"
			@mousedown.stop.prevent="startDrag(item, 'ne')"
		>
		</div>
		<div
			v-if="item.resizable"
			class="select-areas-resize-handler sw"
			:style="{
                cursor: 'sw-resize',
                'background-color': this.color,
                left: (displayPosX(item)-4)+'px',
                top: (displayPosY(item)+item.height-8)+'px',
                'z-index': item.z+10
            }"
			@mousedown.stop.prevent="startDrag(item, 'sw')"
		>
		</div>
		<div
			v-if="item.resizable"
			class="select-areas-resize-handler se"
			:style="{
                cursor: 'se-resize',
                'background-color': this.color,
                left: (displayPosX(item)+item.width-8)+'px',
                top: (displayPosY(item)+item.height-8)+'px',
                'z-index': item.z+10
            }"
			@mousedown.stop.prevent="startDrag(item, 'se')"
		>
		</div>
	</div>
</template>

<script>
export default {
	name: "TargetArea",
	data () {
		return {
			pos: null
		}
	},
	props: {
		item: {
			type: Object,
			default: () => {
				return {
					id: 0,
					x: 0,
					y: 0,
					width: 0,
					height: 0,
					z: 0,
					resizable: false
				}
			}
		},
		posCorrection: {
			type: Boolean,
			default: true
		},
		posImg: {
			type: Object,
			default: null
		},
		color: {
			type: String,
			default: 'white'
		}
	},
	methods: {
		displayPosX (item) {
			return item.x + (this.posCorrection ? this.posImg.left : 0)
		},
		displayPosY (item) {
			return item.y + (this.posCorrection ? this.posImg.top : 0)
		},
		startDrag (item, type) {
			this.pos = type
			document.addEventListener('mousemove', this.doDrag)
			this.$emit('startDrag')
		},
		doDrag (e) {
			this.$emit('doDrag', this.item, this.pos, e)
		}
	},
	updated () {
		if (this.item.resizable === false) {
			window.addEventListener('mouseup', document.removeEventListener('mousemove', this.doDrag))
		}
	}
}
</script>

<style lang="scss" scoped>
	.select-areas-resize-handler {
		position: absolute;
		display: block;
		background: white;
		height: 12px;
		width: 12px;
		overflow: hidden;
		border-radius: 2px;
	}
</style>