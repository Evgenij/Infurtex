<template>
    <div class="team-block transform hover:-translate-y-1 ">
		<input :id="'team-' + this.id" type="radio" name="team" class="hidden" checked>
		<label :for="'team-' + this.id"
			   class="rounded-lg border-2 border-slate-100 w-full p-2 pl-3
			   flex items-center space-x-3 cursor-pointer hover:border-slate-200">
			<div class="radio-check border-2 rounded relative"></div>
			<div class="data">
				<h3 class="font-medium text-sm">{{this.name}}</h3>
				<div class="flex space-x-2 items-center mt-2">
					<div class="data__count-resp flex space-x-1 items-center">
						<i class='bx bx-group text-slate-500'></i>
						<p class="text-sm text-slate-500">{{formattingNumber(this.count_resp)}}</p>
					</div>
					<div class="data__cost flex space-x-1 items-center">
						<svg width="16" height="16" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1724 0.5L14.1682 4.01778L11.0875 4.00375L11.127 4.07326L9.63764 6.72577L7.64188 3.20799L6.1135 5.93001L8.10926 9.44779L6.58089 12.1698L4.58513 8.65203L0 16.8181L9.42442 33.4298L18.6663 33.4719L16.6706 29.9542L19.7512 29.9682L21.747 33.486L24.8276 33.5L22.8318 29.9822L25.9125 29.9963L25.873 29.9267L27.3624 27.2742L29.3581 30.792L30.8865 28.07L28.8907 24.5522L30.4191 21.8302L32.4149 25.348L37 17.1819L27.5756 0.570157L18.3337 0.528063L20.3294 4.04584L17.2488 4.03181L15.2531 0.514031L12.1724 0.5ZM17.2488 4.03181L19.2446 7.54959L23.8655 7.57064L29.1875 16.9514L26.895 21.0344L28.8907 24.5522L27.3624 27.2742L25.3666 23.7564L23.8384 26.4781L20.8361 26.4644L22.8318 29.9822L19.7512 29.9682L17.7554 26.4504L13.1345 26.4294L7.81246 17.0486L10.105 12.9656L8.10926 9.44779L9.63764 6.72577L11.6334 10.2436L13.1616 7.52189L16.1639 7.53556L14.1682 4.01778L17.2488 4.03181Z" fill="#1ac4b6"/>
						</svg>
						<p class="text-sm font-bold text-teal-500">{{formattingNumber(this.cost)}}</p>
					</div>
				</div>
			</div>
		</label>
	</div>
</template>

<script>
    export default {
        name: "TeamBlock",
		data: ()=> ({

		}),
		props: {
        	id: {
        		type: Number,
				required: true
			},
			name: {
        		type: String,
				required: true
			},
			count_resp: {
				type: Number,
				required: true
			},
			cost:{
				type: Number,
				required: true
			}
		}
    }
</script>

<style lang="scss" scoped>

	.team .radio-check {
		width: 20px;
		height: 20px;

		&:before {
			 content: "";
			 display: inline-block;
			 width: 6px;
			 height: 10px;
			 position: absolute;
			 left: 5px;
			 top: 2px;
			 transform: rotateZ(45deg);
		}
	}

	/* Checked */
	.team input[type=radio]:checked + label .radio-check:before {
		border-bottom: 2px solid white;
		border-right: 2px solid white;
	}
	.team input[type=radio]:checked + label .radio-check {
		background: limegreen;
		border-color: limegreen;
	}

</style>
