<script lang="ts">
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';

	$: innerWidth = 0;
	$: innerHeight = 0;
</script>

<PaneGroup direction="horizontal" class="w-full h-full px-2" style="height:{innerHeight - 60}px">
	<Pane defaultSize={50}>
		<PaneGroup direction="vertical">
			<Pane defaultSize={25}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">1111111111</div>
				</div>
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />
			<Pane defaultSize={75}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">222222222</div>
				</div>
			</Pane>
		</PaneGroup>
	</Pane>
	<PaneResizer class="relative flex w-2 items-center justify-center bg-background" />
	<Pane defaultSize={50}>
		<PaneGroup direction="vertical">
			<Pane defaultSize={25}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">33333333</div>
				</div>
			</Pane>
			<PaneResizer class="relative flex h-2 items-center justify-center bg-background" />
			<Pane defaultSize={75}>
				<div class="flex h-full items-center justify-center rounded-lg bg-muted">
					<div class="h-full overflow-auto p-6">44444444</div>
				</div>
			</Pane>
		</PaneGroup>
	</Pane>
</PaneGroup>

<svelte:window bind:innerWidth bind:innerHeight />
