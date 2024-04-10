<script lang="ts">
	import * as Resizable from '$lib/components/ui/resizable/index.js';
	import { Button } from '$lib/components/ui/button';

	$: innerWidth = 0;
	$: innerHeight = 0;

	let show1a = true;
	let show1b = true;
	let show1c = true;

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
	<Button
		variant="outline"
		on:click={() => {
			show1a = !show1a;
		}}
	>
		{show1a ? 'Hide' : 'Show'} 1a
	</Button>
	<Button
		variant="outline"
		on:click={() => {
			show1b = !show1b;
		}}
	>
		{show1b ? 'Hide' : 'Show'} 1b
	</Button>
	<Button
		variant="outline"
		on:click={() => {
			show1c = !show1c;
		}}
	>
		{show1c ? 'Hide' : 'Show'} 1c
	</Button>

	-

	<Button
		variant="outline"
		on:click={() => {
			show2a = !show2a;
		}}
	>
		{show2a ? 'Hide' : 'Show'} 2a
	</Button>
	<Button
		variant="outline"
		on:click={() => {
			show2b = !show2b;
		}}
	>
		{show2b ? 'Hide' : 'Show'} 2b
	</Button>
	<Button
		variant="outline"
		on:click={() => {
			show2c = !show2c;
		}}
	>
		{show2c ? 'Hide' : 'Show'} 2c
	</Button>

	-

	<Button
		variant="outline"
		on:click={() => {
			show3a = !show3a;
		}}
	>
		{show3a ? 'Hide' : 'Show'} 3a
	</Button>
	<Button
		variant="outline"
		on:click={() => {
			show3b = !show3b;
		}}
	>
		{show3b ? 'Hide' : 'Show'} 3b
	</Button>
	<Button
		variant="outline"
		on:click={() => {
			show3c = !show3c;
		}}
	>
		{show3c ? 'Hide' : 'Show'} 3c
	</Button>

	-

	<Button
		variant="outline"
		on:click={() => {
			show4a = !show4a;
		}}
	>
		{show4a ? 'Hide' : 'Show'} 4a
	</Button>
	<Button
		variant="outline"
		on:click={() => {
			show4b = !show4b;
		}}
	>
		{show4b ? 'Hide' : 'Show'} 4b
	</Button>
	<Button
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
	style="height:{innerHeight - 105}px;background-color:#ccc;"
	autoSaveId="123"
>
	<Resizable.Pane defaultSize={1 / 4} order={1}>
		<Resizable.PaneGroup direction="vertical" autoSaveId="1abc">
			<Resizable.Pane defaultSize={1 / 3} order={1}>
				{#if show1a}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">1a</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle
				withHandle
				class="relative flex items-center justify-center bg-background"
			/>

			<Resizable.Pane defaultSize={1 / 3} order={2}>
				{#if show1b}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">1b</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle
				withHandle
				class="relative flex h-2 items-center justify-center bg-background"
			/>

			<Resizable.Pane defaultSize={1 / 3} order={3}>
				{#if show1c}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">1c</span>
					</div>
				{/if}
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</Resizable.Pane>

	<Resizable.Handle
		withHandle
		class="relative flex w-0.5 items-center justify-center bg-background"
	/>

	<Resizable.Pane defaultSize={1 / 4} order={2}>
		<Resizable.PaneGroup direction="vertical" autoSaveId="2abc">
			<Resizable.Pane defaultSize={1 / 3} order={1}>
				{#if show2a}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">2a</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle
				withHandle
				class="relative flex items-center justify-center bg-background"
			/>

			<Resizable.Pane defaultSize={1 / 3} order={2}>
				{#if show2b}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">2b</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle
				withHandle
				class="relative flex h-2 items-center justify-center bg-background"
			/>

			<Resizable.Pane defaultSize={1 / 3} order={3}>
				{#if show2c}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">2c</span>
					</div>
				{/if}
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</Resizable.Pane>

	<Resizable.Handle
		withHandle
		class="relative flex w-0.5 items-center justify-center bg-background"
	/>

	<Resizable.Pane defaultSize={1 / 4} order={2}>
		<Resizable.PaneGroup direction="vertical" autoSaveId="3abc">
			<Resizable.Pane defaultSize={1 / 3} order={1}>
				{#if show3a}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">3a</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle
				withHandle
				class="relative flex items-center justify-center bg-background"
			/>

			<Resizable.Pane defaultSize={1 / 3} order={2}>
				{#if show3b}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">3b</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle
				withHandle
				class="relative flex h-2 items-center justify-center bg-background"
			/>

			<Resizable.Pane defaultSize={1 / 3} order={3}>
				{#if show3c}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">3c</span>
					</div>
				{/if}
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</Resizable.Pane>

	<Resizable.Handle
		withHandle
		class="relative flex w-0.5 items-center justify-center bg-background"
	/>

	<Resizable.Pane defaultSize={1 / 4} order={2}>
		<Resizable.PaneGroup direction="vertical" autoSaveId="4abc">
			<Resizable.Pane defaultSize={1 / 3} order={1}>
				{#if show4a}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">4a</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle
				withHandle
				class="relative flex items-center justify-center bg-background"
			/>

			<Resizable.Pane defaultSize={1 / 3} order={2}>
				{#if show4b}
					<div class="flex h-full items-center justify-center p-6">
						<span class="font-semibold">4b</span>
					</div>
				{/if}
			</Resizable.Pane>

			<Resizable.Handle
				withHandle
				class="relative flex h-2 items-center justify-center bg-background"
			/>

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
