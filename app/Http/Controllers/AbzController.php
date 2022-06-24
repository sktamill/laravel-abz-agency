<?php

namespace App\Http\Controllers;

use App\Http\Requests\AbzRequest;
use App\Http\Resources\AbzResource;
use App\Http\Resources\PositionResource;
use App\Models\Position;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Tinify\Tinify;

class AbzController extends Controller
{
    public function token(Request $request)
    {
        return response(['token' => $request->bearerToken()]);
    }

    public function getUsers()
    {
        return AbzResource::collection(User::all());
    }

    public function uploadForm(AbzRequest $request)
    {
        $data = $request->validated();
        $image = $data['photo'];

        $name = md5(Carbon::now().'_'.$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension();
        $filePath = Storage::disk('public')->putFileAs('/images', $image, $name);

        Tinify::setKey('CS8tnr2HqqGZ1Y0DbXLCqdVfGB5YYGt6');

        $sourse_file = \Tinify\fromFile( Storage::disk('public')->path('/images/'.$name) );

        $resized = $sourse_file->resize(array(
            "method" => "cover",
            "width" => 70,
            "height" => 70
        ));
        $resized->toFile( Storage::disk('public')->path('/images/'.$name) );

        $data['photo'] = $filePath;

        $data['registration_timestamp'] = now();

        $data['password'] = Hash::make(Str::random(5));

        $user = User::create($data);

        return response($user);
    }

    public function getPositions()
    {
        return PositionResource::collection(Position::all());
    }

}
