<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AbzRequest extends FormRequest
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:2|max:60',
            'email' => 'required|min:2|max:100|email:rfc,dns',
            'phone' => 'required|regex:/^[\+]{0,1}380([0-9]{9})$/|unique:users,phone',
            'position_id' => 'required',
            'photo' => 'required|file|max:5000|dimensions:min_width=70,min_height=70|mimes:jpg,jpeg',
        ];
    }
}
