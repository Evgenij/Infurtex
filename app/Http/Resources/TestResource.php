<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
		return [
			'id' => $this->id,
			'type' => $this->type,
			'name' => $this->name,
			'instruction' => $this->instruction,
			'expire_date' => $this->expire_date,
			'status' => $this->status !== 'draft',
			'slug' => $this->slug,
			'questions' => []
		];
    }
}
