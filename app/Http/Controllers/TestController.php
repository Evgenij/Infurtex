<?php

namespace App\Http\Controllers;

use App\Http\Resources\TestResource;
use App\Models\Test;
use App\Http\Requests\StoreTestRequest;
use App\Http\Requests\UpdateTestRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @param Request $request
	 * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
	 */
    public function index(Request $request)
    {
        $user = $request->user();
        return TestResource::collection(Test::where('moderator_id', $user->id)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTestRequest  $request
     * @return TestResource
     */
    public function store(StoreTestRequest $request)
    {
        $result = Test::create($request->all());

        return new TestResource($result);
    }

	/**
	 * Display the specified resource.
	 *
	 * @param \App\Models\Test $test
	 * @param Request $request
	 * @return TestResource
	 */
    public function show(Test $test, Request $request)
    {
    	$user = $request->user();

    	if ($user->id !== $test->moderator_id) {
			return abort(403, 'Несанкционированное действие.');
		}

        return new TestResource($test);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTestRequest  $request
     * @param  \App\Models\Test  $test
     * @return TestResource
     */
    public function update(UpdateTestRequest $request, Test $test)
    {
        $test->update($request->validated());
        return new TestResource($test);
    }

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param \App\Models\Test $test
	 * @param Request $request
	 * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
	 */
    public function destroy(Test $test, Request $request)
    {
		$user = $request->user();
		if($user->id !== $test->moderator_id) {
			return abort(403, 'Несанкционированное действие.');
		}

		$test->delete();
		return response('', 204);
    }
}
