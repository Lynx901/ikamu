<template>
	<article class="activity" :class="['category-' + activity.category, {'not-opened': !opened}]">
		<header class="name">
			<h2>{{ activity.name }}</h2>
			<i @click="opened = !opened" class="icon" :class="[{'icon-arrow-down': !opened}, {'icon-arrow-up': opened}]"></i>
		</header>
		<ul class="information">
			<li><i class="icon icon-categories"></i>{{ getCategoryText(activity.category) }}</li>
			<li><i class="icon icon-people"></i>{{ getParticipantsText(activity.participants) }}</li>
			<li><i class="icon icon-time"></i>{{ getDurationText(activity.duration) }}</li>
		</ul>
		<p v-if="opened" class="development">{{ activity.development }}</p>
		<footer class="data">
			<div class="data-upload">
			<p class="creator">{{ truncateName(activity.creator) }}</p>
			{{ sinceDate }}
			<time class="date" :title="localizeDate(activity.createdAt)">{{ formatDate(activity.createdAt) }}</time>
			</div>
			<div class="data-likes">
				{{ activity.likes }}
				<i class="icon icon-heart"></i>
			</div>
		</footer>
	</article>
</template>

<script>
	import typesParticipants from "@/constants/types-participants";
	import typesDurations from "@/constants/types-durations";
	import typesCategories from "@/constants/types-categories";

	export default {
		name: "ActivityBlock",
		props: ['activity'],
		data() {
			return {
				participants: typesParticipants,
				durations: typesDurations,
				categories: typesCategories,
				opened: false,
				sinceDate: "hace"
			}
		},
		methods: {
			getCategoryText(category) {
				return this.categories.find((cat) => {return cat["identifier"] === category})["text"];
			},
			getParticipantsText(participants) {
				return this.participants.find((part) => {return part["identifier"] === participants})["text"];
			},
			getDurationText(duration) {
				return this.durations.find((dur) => {return dur["identifier"] === duration})["text"];
			},
			truncateName(name) {
				if(name.length > 10) return name.slice(0, name.indexOf(" ", (name.indexOf(" ")+1)));
			},
			localizeDate(date) {
				let dateObject = new Date(date);
				let months = [
					"enero",
					"febrero",
					"marzo",
					"abril",
					"mayo",
					"junio",
					"julio",
					"agosto",
					"septiembre",
					"octubre",
					"noviembre",
					"diciembre"
				];
				return dateObject.getDate() + " de " + months[dateObject.getMonth()] + " de " + dateObject.getFullYear();
			},
			formatDate(date) {
				let dateToRet = "no se sabe cuando";
				let day = 86400000;
				let difference = new Date() - new Date(date);
				if(difference < day) {
					dateToRet = "un rato";
				} else if(day <= difference && difference < (day*7)) {
					dateToRet = Math.round(difference/day) + " días";
				} else if((day*7) <= difference && difference < (day*30)) {
					this.sinceDate = "este";
					dateToRet = "mes";
				} else if((day*30) <= difference && difference < (day*365)) {
					dateToRet = Math.round(difference/(day*30)) + " meses";
				} else {
					dateToRet = "+1 año"
				}
				return dateToRet;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/theme/variables.scss';

	.activity {
		box-sizing: border-box;

		box-shadow: 0 3px 6px 1px rgba(0,0,0,0.50);
		border-radius: 5px;

		padding: 20px 20px;

		margin-right: 20px;
		margin-bottom: 20px;

		min-width: 350px;
		max-width: 350px;
		min-height: 235px;

		&.not-opened {
			max-height: 245px;

			.name h2 {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.name {
			display: flex;
			justify-content: space-between;

			margin-bottom: 10px;

			h2 {
				font-family: Noteworthy-Bold, fantasy;
				font-size: 28px;
				color: #FFFFFF;

				overflow-wrap: break-word;
				word-wrap: break-word;
				hyphens: auto;

				max-width: 270px;
			}

			.icon {
				font-family: Noteworthy-Bold, fantasy;
				font-size: 22px;
				color: #FFFFFF;

				position: relative;
				top: 10px;

				&:hover {
					cursor: pointer;
				}
			}
		}

		.information {
			color: white;
			list-style: none;

			margin-bottom: 20px;

			li {
				margin-bottom: 20px;

				.icon {
					margin-right: 10px;
					position: relative;
					top: 2px;
				}
			}
		}

		.development {
			color: white;
			font-size: 16px;
			margin-bottom: 20px;

			text-align: justify;

			overflow-wrap: break-word;
			word-wrap: break-word;
			hyphens: auto;
		}

		.data {
			color: white;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;

			.creator {
				font-weight: bold;
				display: inline;
			}

			.date {
				cursor: help;
				font-weight: bold;
			}

			.icon {
				position: relative;
				top: 6px;

				margin-left: 5px;
				font-size: 25px;

				&:hover {
					cursor: pointer;
					color: $danger-color;
				}
			}
		}

		&.category-reflexion {
			background-image: linear-gradient(-135deg, #1A2980 0%, #26D0CE 100%);
		}
		&.category-equipo {
			background-image: linear-gradient(45deg, #EE0979 0%, #3B4371 100%);
		}
		&.category-confianza {
			background-image: linear-gradient(-135deg, #0F3443 0%, #34E89E 100%);
		}
		&.category-entretenidas {
			background-image: linear-gradient(-135deg, #C02425 0%, #F0CB35 100%);
		}
		&.category-pensar {
			background-image: linear-gradient(-135deg, #D7DDE8 0%, #757F9A 100%);
		}
		&.category-pequeñas {
			background-image: linear-gradient(-135deg, #A770EF 0%, #FDB99B 100%);
		}
		&.category-conocimiento {
			background-image: linear-gradient(-135deg, #4776E6 0%, #8E54E9 100%);
		}

		&:hover {
			box-shadow: 0 5px 8px 3px rgba(0,0,0,0.50);

			transition-duration: 0.2s;
		}

		@media (max-width: 625px) {
			margin-right: 0;
			width: 100%;
		}
	}
















</style>
