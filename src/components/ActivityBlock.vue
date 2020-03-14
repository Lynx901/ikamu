<template>
	<article class="activity" :class="['category-' + activity.category.identifier, {'not-opened': !opened}, {'creating': creating}]">
		<header v-if="!creating" class="name">
			<h2  :title="activity.name">{{ activity.name }}</h2>
			<i @click="opened = !opened" class="icon" :class="[{'icon-arrow-down': !opened}, {'icon-arrow-up': opened}]"></i>
		</header>
		<header v-else class="name">
			<fieldset class="help">
				<legend>Título:</legend>
				<label>
					<input placeholder="Escribe un título..." class="name-input" v-model="activity.name">
				</label>
			</fieldset>
		</header>
		<ul v-if="!creating" class="information">
			<li><i class="icon icon-categories"></i>{{ activity.category.text }}</li>
			<li><i class="icon icon-people"></i>{{ activity.participants.text }}</li>
			<li><i class="icon icon-time"></i>{{ activity.duration.text }}</li>
		</ul>
		<ul v-else class="information">
			<li>
				<label>
					<i class="icon icon-categories"></i>
					<select class="information-select" v-model="activity.category" required>
						<option :value="{'identifier': null, 'text': null}" disabled>Selecciona la categoría...</option>
						<option v-for="category in categories" :value="category">{{ category.text }}</option>
					</select>
				</label>
			</li>
			<li>
				<label>
					<i class="icon icon-people"></i>
					<select class="information-select" v-model="activity.participants" required>
						<option :value="{'identifier': null, 'text': null}" disabled>Selecciona el número de participantes...</option>
						<option v-for="participant in participants" :value="participant">{{ participant.text }}</option>
					</select>
				</label>
			</li>
			<li>
				<label>
					<i class="icon icon-time"></i>
					<select class="information-select" v-model="activity.duration" required>
						<option :value="{'identifier': null, 'text': null}" disabled>Selecciona la duración aproximada...</option>
						<option v-for="duration in durations" :value="duration">{{ duration.text }}</option>
					</select>
				</label>
			</li>
		</ul>
		<p v-if="opened && !creating" class="development">{{ activity.development }}</p>
		<fieldset v-if="creating" class="development help">
			<legend>Desarrollo:</legend>
			<label>
				<textarea class="development-input" id="development" placeholder="Escribe el desarrollo de la actividad…" v-model="activity.development"></textarea>
			</label>
		</fieldset>
		<footer class="data">
			<div class="data-upload">
				<p v-if="!creating" class="creator" :title="activity.creator">{{ truncateName(activity.creator) }}</p>
				<fieldset v-if="creating" class="help">
					<legend>Autor: </legend> <span class="creator">{{ user.user.displayName }}</span>
					<label>
						<input placeholder="Escribe el nombre que se mostrará..." class="data-input" v-model="activity.creator">
					</label>
				</fieldset>
				<span v-if="!creating">
					{{ sinceDate }}
					<time class="date" :title="localizeDate(activity.createdAt)">{{ formatDate(activity.createdAt) }}</time>
				</span>
			</div>
			<div v-if="!creating" class="data-likes">
				{{ likes }}
				<i class="icon icon-heart" @click="likes += 1"></i>
			</div>
		</footer>
	</article>
</template>

<script>
	import typesParticipants from "@/constants/types-participants";
	import typesDurations from "@/constants/types-durations";
	import typesCategories from "@/constants/types-categories";
	import {mapState} from "vuex";

	export default {
		name: "ActivityBlock",
		props: {
			activity: {
				required: true
			},
			creating: {
				default: false
			}
		},
		mounted() {
			let tx = document.getElementById('development');
			if(tx) {
				let activity = tx.parentElement.parentElement.parentElement;
				tx.setAttribute('style', 'height:' + (tx.scrollHeight) + 'px;overflow-y:hidden;');
				activity.setAttribute('style', 'min-height: 370px');
				tx.addEventListener("input", onInput, false);
			}

			function onInput() {
				let activity = this.parentElement.parentElement.parentElement;
				this.style.height = 'auto';
				this.style.height = (this.scrollHeight) + 'px';
				activity.style.minHeight = 334 + (this.scrollHeight) + 'px';
			}
		},
		data() {
			return {
				participants: typesParticipants,
				durations: typesDurations,
				categories: typesCategories,
				opened: false,
				sinceDate: "hace"
			}
		},
		computed:{
			...mapState('authentication', {
				user: 'user'
			}),

			likes: {
				get() {
					return this.$store.state.activities.data[this.activity.id].likes
				},
				set(value) {
					this.$store.dispatch("activities/patch", { id: this.activity.id, likes: value });
				}
			}
		},
		methods: {
			truncateName(name) {
				let indexFirstSpace = name.indexOf(" ");
				let indexSecondSpace = name.indexOf(" ", (indexFirstSpace+1));
				let truncatedName = "Alguien";
				if(-1 !== indexSecondSpace) {
					if(name.length > 10) truncatedName = name.slice(0, indexSecondSpace);
				} else if(-1 !== indexFirstSpace){
					truncatedName = name.slice(0, indexFirstSpace).toString();
					if(name.length > 10) truncatedName = name.slice(0, indexFirstSpace).toString();
				} else {
					truncatedName = name.slice(0, 10);
				}
				return truncatedName;
			},
			localizeDate(date) {
				let dateObject = new Date(date.seconds*1000);
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
				let difference = new Date() - new Date(date.seconds*1000);
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
		height: 100%;

		&.not-opened {
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
				font-size: 22px;
				color: #FFFFFF;

				position: relative;
				top: 10px;

				&:hover {
					cursor: pointer;
				}
			}

			.name-input {
				margin-bottom: 10px;
				width: 100%;

				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

				color: white;
				background-color: transparent;
				border: none;
				font-family: Noteworthy-Bold, fantasy;
				font-size: 28px;

				border-bottom: 1px solid white;
				border-radius: 0;

				&:focus {
					outline: none;
				}

				&::placeholder {
					color: rgba(255, 255, 255, 0.5);
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

				.information-select {
					width: 90%;

					color: white;
					background-color: transparent;
					border: none;

					&:focus {
						outline: none;
						border-bottom: 1px solid white;
						border-radius: 0;
					}

					&:invalid {
						color: rgba(255, 255, 255, 0.5);
					}

					[disabled] {
						color: rgba(255, 255, 255, 0.5)
					}
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

			.development-input {
				box-sizing: border-box;
				width: 100%;
				resize: none;

				color: white;
				background-color: transparent;
				font-size: 16px;

				text-align: justify;

				border: none;

				overflow-wrap: break-word;
				word-wrap: break-word;
				hyphens: auto;

				&:focus {
					outline: none;
				}

				&::placeholder {
					color: rgba(255, 255, 255, 0.5);
				}
			}
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

			.data-input {
				width: 100%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

				color: white;
				font-weight: bold;
				background-color: transparent;
				border: none;
				font-size: 16px;

				border-bottom: 1px solid white;
				border-radius: 0;

				&:focus {
					outline: none;
				}

				&::placeholder {
					font-weight: normal;
					color: rgba(255, 255, 255, 0.5);
				}
			}
		}

		.help {
			color: white;
			border: none;
		}

		&.category-null {
			background-image: linear-gradient(-135deg, #000000 0%, #555555 100%);
		}
		&.category-reflexion {
			background-image: linear-gradient(-135deg, #1A2980 0%, #26D0CE 100%);
		}
		&.category-equipo {
			background-image: linear-gradient(-135deg, #3B4371 0%, #EE0979 100%);
		}
		&.category-confianza {
			background-image: linear-gradient(-135deg, #0F3443 0%, #34E89E 100%);
		}
		&.category-entretenidas {
			background-image: linear-gradient(-135deg, #C02425 0%, #F0CB35 100%);
		}
		&.category-pensar {
			background-image: linear-gradient(-135deg, #3F3F3F 0%, #757F9A 100%);
		}
		&.category-pequeñas {
			background-image: linear-gradient(-135deg, #A770EF 0%, #FDB99B 100%);
		}
		&.category-conocimiento {
			background-image: linear-gradient(-135deg, #8E54E9 0%, #4776E6 100%);
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
