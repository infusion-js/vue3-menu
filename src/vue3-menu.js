
/* Menu, Menu-Item & Sub-Menu Elements */
Vue.component('vue-menu', {
	props: {
		id: {type: String}
	},
	template: `
		<nav :id="id">
			<ul class="main-menu">
				<slot></slot>
			</ul>
		</nav>`,
	data: function() {
		return {msg: 'menu'};
	}
});
Vue.component('vue-menu-item', {
	props: {
		id: {type: String},
		title: {type: String, required: true},
		url: {type: String}
	},
	template: `
		<li access-rule :id="id">
			<router-link :to="{ name: url }" v-if="url">
				<span>{{t(title)}}</span>
			</router-link>
			<slot v-else name="menu-item"></slot>
		</li>`,
	data: function() {
		return {msg: 'menu-item'};
	}
});
Vue.component('vue-sub-menu', {
	props: {
		id: {type: String},
		title: {type: String, required: true},
		url: {type: String}
	},
	template: `
		<li access-rule :id="id">
			<router-link :to="url">
				<span>{{t(title)}}</span>
			</router-link>
			<ul class="sub-menu"><slot name="sub-menu"></slot></ul>
		</li>`,
	data: function() {
		return {msg: 'sub-menu'};
	}
});

