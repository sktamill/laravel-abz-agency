<?php

namespace App\Http\Resources;

use App\Http\Requests\StoreAuthorRequest;
use Illuminate\Http\Resources\Json\JsonResource;

class AbzResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
             'id' => (String)$this->id,
             'name' => $this->name,
             'email' => $this->email,
             'phone' => $this->phone,
             'position' => $this->position->title,
             'position_id' => $this->position_id,
             'registration_timestamp' => (String)strtotime($this->registration_timestamp),
             'photo' => $this->photo
        ];
    }
}
