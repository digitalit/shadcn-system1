<script lang="ts">
	import * as Resizable from '$ui/resizable/index.js';
	import { Button } from '$ui/button';
	import type { PaneAPI } from 'paneforge';

	// STORES
	import { settingsStoreA } from '$modules/settingsStoreA';

	$: innerWidth = 0;
	$: innerHeight = 0;

	let show1a: PaneAPI;
	let collapsed = false;

	let width1: number;
	let height1a: number;

	let show1b = true;
	let height1b: number;

	let show1c = true;
	let height1c: number;

	let show2a = true;
	let show2b = true;
	let show2c = true;

	let show3a = true;
	let show3b = true;
	let show3c = true;

	let show4a = true;
	let show4b = true;
	let show4c = true;
</script>

<div class="flex items-center gap-2 pb-2">
	{#if collapsed}
		<Button
			size="xs"
			variant="outline"
			on:click={() => {
				show1a.expand();
			}}
		>
			Expand show1a
		</Button>
	{:else}
		<Button
			size="xs"
			variant="outline"
			on:click={() => {
				show1a.collapse();
				//show1a.resize(5);
			}}
		>
			Collapse show1a
		</Button>
	{/if}

	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			$settingsStoreA.show1a = !$settingsStoreA.show1a;
		}}
	>
		{$settingsStoreA.show1a ? 'Hide' : 'Show'} 1a
	</Button>
	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show1b = !show1b;
		}}
	>
		{show1b ? 'Hide' : 'Show'} 1b
	</Button>
	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show1c = !show1c;
		}}
	>
		{show1c ? 'Hide' : 'Show'} 1c
	</Button>

	-

	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show2a = !show2a;
		}}
	>
		{show2a ? 'Hide' : 'Show'} 2a
	</Button>
	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show2b = !show2b;
		}}
	>
		{show2b ? 'Hide' : 'Show'} 2b
	</Button>
	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show2c = !show2c;
		}}
	>
		{show2c ? 'Hide' : 'Show'} 2c
	</Button>

	-

	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show3a = !show3a;
		}}
	>
		{show3a ? 'Hide' : 'Show'} 3a
	</Button>
	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show3b = !show3b;
		}}
	>
		{show3b ? 'Hide' : 'Show'} 3b
	</Button>
	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show3c = !show3c;
		}}
	>
		{show3c ? 'Hide' : 'Show'} 3c
	</Button>

	-

	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show4a = !show4a;
		}}
	>
		{show4a ? 'Hide' : 'Show'} 4a
	</Button>
	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show4b = !show4b;
		}}
	>
		{show4b ? 'Hide' : 'Show'} 4b
	</Button>
	<Button
		size="xs"
		variant="outline"
		on:click={() => {
			show4c = !show4c;
		}}
	>
		{show4c ? 'Hide' : 'Show'} 4c
	</Button>
</div>

<Resizable.PaneGroup
	direction="horizontal"
	style="height:{innerHeight - 90}px;background-color:#ccc;"
	autoSaveId="1234"
>
	<Resizable.Pane defaultSize={1 / 4} order={1}>
		<Resizable.PaneGroup direction="vertical" autoSaveId="1abc">
			<Resizable.Pane
				collapsedSize={1}
				collapsible={true}
				minSize={5}
				bind:pane={show1a}
				onCollapse={() => (collapsed = true)}
				onExpand={() => (collapsed = false)}
				defaultSize={1 / 3}
				order={1}
			>
				{#if $settingsStoreA.show1a}
					<div
						bind:clientWidth={width1}
						bind:clientHeight={height1a}
						class="flex h-full items-center justify-center p-6"
					>
						<span class="font-semibold">width1: {width1} height1a: {height1a}</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle withHandle />

			<Resizable.Pane defaultSize={1 / 3} order={2}>
				{#if show1b}
					<div bind:clientHeight={height1b} class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">width1: {width1} height1b: {height1b}</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle withHandle />

			<Resizable.Pane defaultSize={1 / 3} order={3}>
				{#if show1c}
					<div bind:clientHeight={height1c} class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">width1: {width1} height1c: {height1c}</span>
					</div>
				{/if}
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</Resizable.Pane>

	<Resizable.Handle withHandle />

	<Resizable.Pane defaultSize={1 / 4} order={2}>
		<Resizable.PaneGroup direction="vertical" autoSaveId="2abc">
			<Resizable.Pane defaultSize={1 / 3} order={1}>
				{#if show2a}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">2a</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle withHandle />

			<Resizable.Pane defaultSize={1 / 3} order={2}>
				{#if show2b}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">2b</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle withHandle />

			<Resizable.Pane defaultSize={1 / 3} order={3}>
				{#if show2c}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">2c</span>
					</div>
				{/if}
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</Resizable.Pane>

	<Resizable.Handle withHandle />

	<Resizable.Pane defaultSize={1 / 4} order={2}>
		<Resizable.PaneGroup direction="vertical" autoSaveId="3abc">
			<Resizable.Pane defaultSize={1 / 3} order={1}>
				{#if show3a}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">3a</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle withHandle />

			<Resizable.Pane defaultSize={1 / 3} order={2}>
				{#if show3b}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">3b</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle withHandle />

			<Resizable.Pane defaultSize={1 / 3} order={3}>
				{#if show3c}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">3c</span>
					</div>
				{/if}
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</Resizable.Pane>

	<Resizable.Handle withHandle />

	<Resizable.Pane defaultSize={1 / 4} order={2}>
		<Resizable.PaneGroup direction="vertical" autoSaveId="4abc">
			<Resizable.Pane defaultSize={1 / 3} order={1}>
				{#if show4a}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">4a</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle withHandle />

			<Resizable.Pane defaultSize={1 / 3} order={2}>
				{#if show4b}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">4b</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle withHandle />

			<Resizable.Pane defaultSize={1 / 3} order={3}>
				{#if show4c}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">4c</span>
					</div>
				{/if}
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</Resizable.Pane>
</Resizable.PaneGroup>

<svelte:window bind:innerWidth bind:innerHeight />
