<script lang="ts">
	import { isDarkMode } from '../stores/stores';
	export let data: {
		id: number;
		name: string;
		deployment: string;
		github: string;
		description: string;
		image: string;
	};
</script>

<div
	class="border-[#ff8e3c] border-2 dark:border-0 gap-4 md:gap-2 p-4 md:p-5 lg:p-6 xl:p-7 m-2 md:m-3 lg:m-4 xl:m-5  flex items-start flex-col justify-start bg-[#fffffe99] dark:bg-[#121629AA]   dark:text-[#b8c1ec] rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl shadow-xl dark:shadow-2xl"
	id={`${data.id}`}
>
	<div style="font-family: 'Itim';" class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
		{data.name}
	</div>
	<div class="flex gap-6 flex-col lg:flex-row">
		<a
			target="_blank"
			class="w-full lg:w-4/6 self-center"
			rel="noreferrer"
			href={`https://${data.deployment}`}
		>
			<img
				src={data.image}
				alt="AssignmentSite"
				class="rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl shadow-2xl dark:shadow-sm"
			/>
		</a>
		<div class="flex items-center justify-center dark:text-[#b8c1ec] w-full lg:w-2/6">
			<div class="w-full p-3 flex flex-col justify-between gap-10">
				<div class="flex flex-col gap-4">
					<p style="font-family: 'Itim';">DEPLOYMENT</p>
					<a
						target="_blank"
						class="hover:underline text-md lg:text-lg flex gap-3 items-center"
						rel="noreferrer"
						href={`https://${data.deployment}`}
					>
						<p style="word-break: break-all;font-family: 'Montserrat', sans-serif;">
							{data.deployment}
						</p>
						<div style="width:22px;height:22px;">
							<svg
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3 3V2H2V3H3ZM12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L12.2929 13.7071ZM4 11V3H2V11H4ZM3 4H11V2H3V4ZM2.29289 3.70711L12.2929 13.7071L13.7071 12.2929L3.70711 2.29289L2.29289 3.70711Z"
									fill={$isDarkMode ? '#b8c1ec' : '#716040'}
								/>
								<path
									d="M4 15V15C4 16.8692 4 17.8038 4.40192 18.5C4.66523 18.9561 5.04394 19.3348 5.5 19.5981C6.19615 20 7.13077 20 9 20H14C16.8284 20 18.2426 20 19.1213 19.1213C20 18.2426 20 16.8284 20 14V9C20 7.13077 20 6.19615 19.5981 5.5C19.3348 5.04394 18.9561 4.66523 18.5 4.40192C17.8038 4 16.8692 4 15 4V4"
									stroke={$isDarkMode ? '#b8c1ec' : '#716040'}
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</div>
					</a>
				</div>
				<div class="flex flex-col gap-4">
					<p style="font-family: 'Itim';">GITHUB</p>
					<a
						target="_blank"
						class="hover:underline text-md lg:text-lg flex gap-5 items-center w-full"
						rel="noreferrer"
						href={data.github}
					>
						<div>
							<svg
								aria-hidden="true"
								class="octicon octicon-mark-github"
								height="22"
								version="1.1"
								viewBox="0 0 16 16"
								width="22"
								><path
									fill-rule="evenodd"
									fill={$isDarkMode ? '#b8c1ec' : '#716040'}
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
								/>
							</svg>
						</div>
						<p style="word-break: break-all;font-family: 'Montserrat', sans-serif;">
							{data.github}
						</p>
					</a>
				</div>
				<div class="flex flex-col gap-4">
					<p style="font-family: 'Itim';">DESCRIPTION</p>
					<p style="font-family: Kalam;">
						{data.description}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
