<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
	{
		$this->merge([
			'id_moder' => $this->user()->id
		]);
	}

	/**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id_moder' => 'exists:moderators,id',
			'id_project '=> 'nullable|numeric',
			'type' => 'required|numeric',
			'name' => 'required|string|max:1000',
			'instruction' => 'required|string|max:1000',
			'expire_date' => 'nullable|date|after:tomorrow',
        ];
    }
}
