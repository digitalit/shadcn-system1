<script lang="ts">
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';
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

<div class="flex items-center gap-2 pl-2 pb-2">
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

<PaneGroup
	direction="horizontal"
	class="w-full h-full px-2"
	style="height:{innerHeight - 105}px"
	autoSaveId="123"
>
	<Pane defaultSize={1 / 4} order={1}>
		<!-- {#if show1a || show1b || show1c} -->
		<PaneGroup direction="vertical" autoSaveId="1abc">
			<Pane defaultSize={1 / 3} order={1}>
				{#if show1a}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">1a</div>
					</div>
				{/if}
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />

			<Pane defaultSize={1 / 3} order={2}>
				{#if show1b}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">1b</div>
					</div>
				{/if}
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />

			<Pane defaultSize={1 / 3} order={3}>
				{#if show1c}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">1c</div>
					</div>
				{/if}
			</Pane>
		</PaneGroup>
		<!-- {/if} -->
	</Pane>

	<PaneResizer class="relative flex w-2 items-center justify-center bg-background" />

	<Pane defaultSize={1 / 4} order={2}>
		<!-- {#if show2a || show2b || show2c} -->
		<PaneGroup direction="vertical" autoSaveId="2abc">
			<Pane defaultSize={1 / 3} order={1}>
				{#if show2a}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">2a</div>
					</div>
				{/if}
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />

			<Pane defaultSize={1 / 3} order={2}>
				{#if show2b}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">2b</div>
					</div>
				{/if}
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />

			<Pane defaultSize={1 / 3} order={3}>
				{#if show2c}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">2c</div>
					</div>
				{/if}
			</Pane>
		</PaneGroup>
		<!-- {/if} -->
	</Pane>

	<PaneResizer class="relative flex w-2 items-center justify-center bg-background" />

	<Pane defaultSize={1 / 4} order={3}>
		<!-- {#if show3a || show3b || show3c} -->
		<PaneGroup direction="vertical" autoSaveId="3abc">
			<Pane defaultSize={1 / 3} order={1}>
				{#if show3a}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">3a</div>
					</div>
				{/if}
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />

			<Pane defaultSize={1 / 3} order={2}>
				{#if show3b}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">3b</div>
					</div>
				{/if}
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />

			<Pane defaultSize={1 / 3} order={3}>
				{#if show3c}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">3c</div>
					</div>
				{/if}
			</Pane>
		</PaneGroup>
		<!-- {/if} -->
	</Pane>

	<PaneResizer class="relative flex w-2 items-center justify-center bg-background" />

	<Pane defaultSize={1 / 4} order={4}>
		<!-- {#if show4a || show4b || show4c} -->
		<PaneGroup direction="vertical" autoSaveId="4aabc">
			<Pane defaultSize={1 / 3} order={1}>
				{#if show4a}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">4a</div>
					</div>
				{/if}
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />

			<Pane defaultSize={1 / 3} order={2}>
				{#if show4b}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">4b</div>
					</div>
				{/if}
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />

			<Pane defaultSize={1 / 3} order={3}>
				{#if show4c}
					<div class="flex h-full items-center justify-center rounded-lg bg-muted">
						<div class="h-full overflow-auto p-6">4c</div>
					</div>
				{/if}
			</Pane>
		</PaneGroup>
		<!-- {/if} -->
	</Pane>
</PaneGroup>

<svelte:window bind:innerWidth bind:innerHeight />
