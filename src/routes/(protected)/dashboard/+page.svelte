<script lang="ts">
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';

	$: innerWidth = 0;
	$: innerHeight = 0;
</script>

<PaneGroup
	direction="horizontal"
	class="w-full h-full px-2"
	style="height:{innerHeight - 60}px"
	autoSaveId="123"
>
	<Pane defaultSize={50}>
		<PaneGroup direction="vertical">
			<Pane defaultSize={25}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">1111aaaa</div>
				</div>
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />
			<Pane defaultSize={75}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">1111bbbb</div>
				</div>
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />
			<Pane defaultSize={75}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">1111ccc</div>
				</div>
			</Pane>
		</PaneGroup>
	</Pane>
	<PaneResizer class="relative flex w-2 items-center justify-center bg-background" />
	<Pane defaultSize={50}>
		<PaneGroup direction="vertical">
			<Pane defaultSize={25}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">2222aaaa</div>
				</div>
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />
			<Pane defaultSize={75}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">2222bbbb</div>
				</div>
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />
			<Pane defaultSize={75}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">2222cccc</div>
				</div>
			</Pane>
		</PaneGroup>
	</Pane>
	<PaneResizer class="relative flex w-2 items-center justify-center bg-background" />
	<Pane defaultSize={50}>
		<PaneGroup direction="vertical">
			<Pane defaultSize={25}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">333aaaa</div>
				</div>
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />
			<Pane defaultSize={75}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">3333bbbb</div>
				</div>
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />
			<Pane defaultSize={75}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">3333cccc</div>
				</div>
			</Pane>
		</PaneGroup>
	</Pane>
</PaneGroup>

<svelte:window bind:innerWidth bind:innerHeight />
