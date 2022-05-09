<?php

namespace App\Http\Controllers;

use App\Models\Test;
use App\Http\Requests\StoreTestRequest;
use App\Http\Requests\UpdateTestRequest;
use Illuminate\Http\Request;
use App\Http\Resources\TestResource;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return TestResource::collection(Test::where('id_moder', $user->id)->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTestRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTestRequest $request)
    {
        $result = Test::create($request->validated());

        return new TestResource($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function show(Test $test, Request $request)
    {
    	$user = $request->user();

    	if ($user->id !== $test->id_moder) {
			return abort(403, 'Несанкционированное действие.');
		}

        return new TestResource($test);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTestRequest  $request
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTestRequest $request, Test $test)
    {
        $test->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function destroy(Test $test, Request $request)
    {
		$user = $request->user();
		if($user->id !== $test->id_moder) {
			return abort(403, 'Несанкционированное действие.');
		}

		$test->delete();
		return response('', 204);
    }
}
