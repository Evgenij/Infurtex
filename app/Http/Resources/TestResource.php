<?php

namespace App\Http\Resources;

use App\Models\Moderator;
use App\Models\Project;
use App\Models\Question;
use Illuminate\Http\Resources\Json\JsonResource;

class TestResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
	 * @throws \Exception
	 */
    public function toArray($request)
    {
//        return parent::toArray($request);
		return [
			'id' => $this->id,
			'moderator' => $this->moderator_id,
			'project' => $this->project_id !== null ? Project::find($this->project_id) : null,
			'type' => $this->type,
			'name' => $this->name,
			'instruction' => $this->instruction,
			'expire_date' => $this->expire_date,
			'status' => $this->status,
			'slug' => $this->slug,
			'respondents' => random_int(0,5000),
			'questions' => Question::all()->where('test_id', $this->id)
		];
    }
}
