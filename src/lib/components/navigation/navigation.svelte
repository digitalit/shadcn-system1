<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Command from '$lib/components/ui/command';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Sun, Moon, SunMoon, UserRound, LogOut } from 'lucide-svelte';
	import { setMode, resetMode } from 'mode-watcher';
	import { APP_NAME } from '$lib/config/constants';
	import Logo from '$lib/components/logo/logo.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import convertNameToInitials from '$lib/_helpers/convertNameToInitials';

	import * as Menubar from '$lib/components/ui/menubar';

	let bookmarks = false;
	let fullUrls = true;

	const profileRadioValue = 'benoit';

	export let user: any;
	$: currentPage = $page.url.pathname;

	function signOut() {
		// Create a form element
		var form = document.createElement('form');
		form.method = 'POST';
		form.action = '/auth/sign-out';
		document.body.appendChild(form);
		form.submit();
	}

	let initials: string = '';
	$: {
		if (user) {
			initials = convertNameToInitials(user.firstName, user.lastName);
		}
	}
</script>

<header class="bg-background sticky top-0 z-40 w-full border-b">
	<div
		class="container flex {currentPage === '/dashboard'
			? 'h-10'
			: 'h-16'}  items-center space-x-4 sm:justify-between sm:space-x-0"
	>
		<div class="flex gap-6 md:gap-10">
			{#if currentPage !== '/dashboard'}
				<a class="flex items-center space-x-2" href="/"
					><Logo size="24"></Logo><span class="inline-block font-bold">{APP_NAME}</span></a
				>

				<nav class="flex gap-6">
					<a
						class="flex items-center text-sm font-medium text-muted-foreground"
						href="/"
						class:active={'/' === currentPage}>Home</a
					>

					<a
						class="flex items-center text-sm font-medium text-muted-foreground"
						href="/terms"
						class:active={'/terms' === currentPage}>terms</a
					>
					<a
						class="flex items-center text-sm font-medium text-muted-foreground"
						href="/privacy"
						class:active={'/privacy' === currentPage}>privacy</a
					>

					<a
						class="flex items-center text-sm font-medium text-muted-foreground"
						href="/dashboard"
						class:active={'/dashboard' === currentPage}>admin</a
					>
				</nav>
			{/if}
			{#if currentPage === '/dashboard'}
				<Menubar.Root>
					<Menubar.Menu>
						<Menubar.Trigger>File</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item>
								New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Item>
								New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Item>New Incognito Window</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Sub>
								<Menubar.SubTrigger>Share</Menubar.SubTrigger>
								<Menubar.SubContent>
									<Menubar.Item>Email link</Menubar.Item>
									<Menubar.Item>Messages</Menubar.Item>
									<Menubar.Item>Notes</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Sub>
							<Menubar.Separator />
							<Menubar.Item>
								Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
							</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>Edit</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item>
								Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Item>
								Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Sub>
								<Menubar.SubTrigger>Find</Menubar.SubTrigger>
								<Menubar.SubContent>
									<Menubar.Item>Search the web</Menubar.Item>
									<Menubar.Separator />
									<Menubar.Item>Find...</Menubar.Item>
									<Menubar.Item>Find Next</Menubar.Item>
									<Menubar.Item>Find Previous</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Sub>
							<Menubar.Separator />
							<Menubar.Item>Cut</Menubar.Item>
							<Menubar.Item>Copy</Menubar.Item>
							<Menubar.Item>Paste</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>View</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.CheckboxItem bind:checked={bookmarks}
								>Always Show Bookmarks Bar</Menubar.CheckboxItem
							>
							<Menubar.CheckboxItem bind:checked={fullUrls}>
								Always Show Full URLs
							</Menubar.CheckboxItem>
							<Menubar.Separator />
							<Menubar.Item inset>
								Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Item inset>
								Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Item inset>Hide Sidebar</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>Profiles</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.RadioGroup value={profileRadioValue}>
								<Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
								<Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
								<Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
							</Menubar.RadioGroup>
							<Menubar.Separator />
							<Menubar.Item inset>Edit...</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Item inset>Add Profile...</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
				</Menubar.Root>
			{/if}
		</div>
		<div class="flex flex-1 items-center justify-end space-x-4">
			<nav class="flex items-center space-x-1">
				{#if !user}
					<Button on:click={() => goto('/auth/sign-in')}>Sign in</Button>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button builders={[builder]} variant="ghost" size="icon">
								<Sun
									class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
								/>
								<Moon
									class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
								/>
								<span class="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
							<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
							<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				{:else}
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full">
								<Avatar.Root class="h-8 w-8">
									<Avatar.Fallback>{initials}</Avatar.Fallback>
								</Avatar.Root>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-56" align="end">
							<DropdownMenu.Label class="font-normal">
								<div class="flex flex-col space-y-1">
									<p class="text-sm font-medium leading-none">{user?.firstName} {user?.lastName}</p>
									<p class="text-xs leading-none text-muted-foreground">{user?.email}</p>
								</div>
							</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Group>
								<DropdownMenu.Item on:click={() => goto('/profile')}>
									<UserRound class="mr-2 h-4 w-4" />
									Profile
									<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
								</DropdownMenu.Item>
							</DropdownMenu.Group>
							<DropdownMenu.Group>
								{#if currentPage === '/dashboard'}
									<DropdownMenu.Item on:click={() => goto('/')}>
										<UserRound class="mr-2 h-4 w-4" />
										www
										<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
									</DropdownMenu.Item>
								{:else}
									<DropdownMenu.Item on:click={() => goto('/dashboard')}>
										<UserRound class="mr-2 h-4 w-4" />
										admin
										<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
									</DropdownMenu.Item>
								{/if}
							</DropdownMenu.Group>

							<DropdownMenu.Sub>
								<DropdownMenu.SubTrigger>
									<Sun
										class="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
									/>
									<Moon
										class="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
									/>
									Appearance
								</DropdownMenu.SubTrigger>
								<DropdownMenu.SubContent>
									<DropdownMenu.Item on:click={() => setMode('light')}
										><Sun class="mr-2 h-4 w-4" />Light
									</DropdownMenu.Item>
									<DropdownMenu.Item on:click={() => setMode('dark')}
										><Moon class="mr-2 h-4 w-4" />Dark
									</DropdownMenu.Item>
									<DropdownMenu.Item on:click={() => setMode('system')}
										><SunMoon class="mr-2 h-4 w-4" />System
									</DropdownMenu.Item>
								</DropdownMenu.SubContent>
							</DropdownMenu.Sub>
							<DropdownMenu.Separator />
							<DropdownMenu.Item on:click={signOut}>
								<LogOut class="mr-2 h-4 w-4" />
								Sign out
								<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				{/if}
			</nav>
		</div>
	</div>
</header>

<style>
	.active {
		@apply text-primary;
	}
</style>
