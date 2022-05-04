<template>
    <div class="team-block transform hover:-translate-y-1">
		<input :id="'team-' + this.id" type="radio" name="team" class="hidden" checked>
		<label :for="'team-' + this.id"
			   class="rounded-lg border-2 border-slate-100 w-full p-2 pl-3 flex items-center space-x-3 cursor-pointer">
			<div class="radio-check border-2 rounded relative"></div>
			<div class="data">
				<h3 class="font-medium text-sm">{{this.name}}</h3>
				<p class="text-sm text-slate-500">{{formattingNumber(this.count_resp)}}</p>
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
