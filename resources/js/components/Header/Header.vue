<template>
    <vs-navbar center-collapsed class="header sticky top-0 mb-6">
        <template #left>
            <svg width="125" height="34" viewBox="0 0 125 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9838 0.98291L13.9486 4.39772L10.9932 4.38445L10.993 4.3841L10.9928 4.38444L10.9157 4.3841L10.9546 4.45157L9.48829 7.02644L7.52346 3.61163L6.01877 6.25397L7.9836 9.66878L6.47891 12.3111L4.51407 8.89632L0 16.8233L9.27837 32.9488L18.3771 32.9897L16.4122 29.5749L19.4451 29.5885L21.41 33.0033L24.4428 33.0169L22.478 29.6021L25.4335 29.6154L25.4337 29.6157L25.4339 29.6154L25.5109 29.6157L25.4721 29.5483L26.9384 26.9734L28.9032 30.3882L30.4079 27.7459L28.443 24.3311L29.9477 21.6887L31.9126 25.1035L36.4266 17.1765L27.1483 1.05101L18.0496 1.01015L20.0144 4.42496L16.9815 4.41134L15.0167 0.996531L11.9838 0.98291ZM16.9815 4.41134L18.9464 7.82615L23.4957 7.84658L28.7352 16.9527L26.4782 20.9163L28.443 24.3311L26.9384 26.9734L24.9735 23.5586L23.469 26.2006L20.5132 26.1873L22.478 29.6021L19.4451 29.5885L17.4803 26.1737L12.9309 26.1533L7.69139 17.0471L9.94843 13.0836L7.9836 9.66878L9.48829 7.02644L11.4531 10.4413L12.9576 7.79925L15.9135 7.81253L13.9486 4.39772L16.9815 4.41134Z" fill="url(#paint0_linear_519_3821)"/>
                <path d="M47.7212 11.2881H50.0597V22.5H47.7212V11.2881ZM60.757 11.2881H62.9834V23.0606L55.039 15.5807V22.5H52.7966V10.7275L60.757 18.2074V11.2881ZM65.7241 11.2881H72.227V13.3062H67.9665V15.8049H72.0668V17.7269H67.9665V22.5H65.7241V11.2881ZM74.5672 11.2881H76.8576V18.688C76.8576 19.3073 77.0285 19.8145 77.3702 20.2096C77.7119 20.594 78.2084 20.7862 78.8598 20.7862C79.5218 20.7862 80.0183 20.594 80.3494 20.2096C80.691 19.8145 80.8619 19.3073 80.8619 18.688V11.2881H83.1683V18.8161C83.1683 19.6917 82.9815 20.4338 82.6078 21.0425C82.234 21.6511 81.7215 22.1103 81.0701 22.4199C80.4188 22.7296 79.682 22.8844 78.8598 22.8844C78.0376 22.8844 77.3008 22.7296 76.6494 22.4199C76.0087 22.1103 75.5015 21.6511 75.1278 21.0425C74.7541 20.4338 74.5672 19.6917 74.5672 18.8161V11.2881ZM85.8229 11.2881H89.6029C90.4892 11.2881 91.242 11.4429 91.8613 11.7526C92.4913 12.0516 92.9718 12.468 93.3029 13.0019C93.6339 13.5358 93.7994 14.1605 93.7994 14.8759C93.7994 15.6661 93.5965 16.3495 93.1907 16.9261C92.785 17.492 92.1977 17.9031 91.4289 18.1594L94.4721 22.5H91.7332L89.1224 18.4317H88.1294V22.5H85.8229V11.2881ZM89.4588 13.2742H88.1294V16.6057H89.4588C90.0567 16.6057 90.5319 16.4616 90.8843 16.1733C91.2367 15.8743 91.4129 15.4632 91.4129 14.94C91.4129 14.4061 91.2367 13.995 90.8843 13.7067C90.5319 13.4184 90.0567 13.2742 89.4588 13.2742ZM94.9545 13.3703V11.2881H103.299V13.3703H100.272V22.5H97.9657V13.3703H94.9545ZM104.921 11.2881H112.064V13.2422H107.163V15.5967H111.744V17.5027H107.163V20.5459H112.064V22.5H104.921V11.2881ZM120.632 11.2881H123.451L119.991 16.7018L123.691 22.5H120.856L118.646 18.4957L116.339 22.5H113.52L117.3 16.7018L113.921 11.2881H116.74L118.662 14.8118L120.632 11.2881Z" fill="#222A30"/>
                <defs>
                    <linearGradient id="paint0_linear_519_3821" x1="4.06587e-08" y1="16.9999" x2="36.2219" y2="14.2767" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#339FE3"/>
                        <stop offset="1" stop-color="#14B8A6"/>
                    </linearGradient>
                </defs>
            </svg>
        </template>
        <div class="links flex space-x-2">
            <template v-for="menuItem in links">
                <router-link :to="menuItem.to"
                             class="px-3 text-sm py-2 rounded-md bg-gray-100 flex items-center font-medium"
                             active-class="bg-teal-500 text-white hover:bg-teal-500 hover:text-white"
                             :class="[
                                 $router.name === menuItem.to.name
                                 ? ''
                                 : 'text-gray-500 hover:bg-gray-200 hover:text-gray-700']"
                             :key="menuItem.name">
					<i class="bx mr-1"
						:class="menuItem.icon"></i>
                    {{menuItem.name}}
                </router-link>
            </template>
        </div>
        <template #right>
            <vs-tooltip bottom shadow border-thick primary>
                <div class="coin-block border-r-2 border-slate-200 mr-3 pr-3 flex items-center justify-end cursor-help">
                    <div class="wrapp flex flex-col items-end">
                        <div class="coin-block__value text-slate-900 font-semibold leading-2">{{getUsersData().coins}}</div>
                        <div class="text-slate-500 text-sm leading-4">инфьюртов</div>
                    </div>
                    <svg class="ml-2" width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1724 0.5L14.1682 4.01778L11.0875 4.00375L11.127 4.07326L9.63764 6.72577L7.64188 3.20799L6.1135 5.93001L8.10926 9.44779L6.58089 12.1698L4.58513 8.65203L0 16.8181L9.42442 33.4298L18.6663 33.4719L16.6706 29.9542L19.7512 29.9682L21.747 33.486L24.8276 33.5L22.8318 29.9822L25.9125 29.9963L25.873 29.9267L27.3624 27.2742L29.3581 30.792L30.8865 28.07L28.8907 24.5522L30.4191 21.8302L32.4149 25.348L37 17.1819L27.5756 0.570157L18.3337 0.528063L20.3294 4.04584L17.2488 4.03181L15.2531 0.514031L12.1724 0.5ZM17.2488 4.03181L19.2446 7.54959L23.8655 7.57064L29.1875 16.9514L26.895 21.0344L28.8907 24.5522L27.3624 27.2742L25.3666 23.7564L23.8384 26.4781L20.8361 26.4644L22.8318 29.9822L19.7512 29.9682L17.7554 26.4504L13.1345 26.4294L7.81246 17.0486L10.105 12.9656L8.10926 9.44779L9.63764 6.72577L11.6334 10.2436L13.1616 7.52189L16.1639 7.53556L14.1682 4.01778L17.2488 4.03181Z" fill="#1ac4b6"/>
                    </svg>
                </div>
                <template #tooltip>
                    <div class="content-block text-slate-500 font-medium flex items-center">
                        <div class="content-block__icon flex items-center justify-center">
                            <i class="bx bxs-info-circle text-teal-500 text-lg mr-4 bg-teal-50 p-3 px-4 rounded-lg"></i>
                        </div>
                        <div class="content-block__text flex-col items-start text-left py-3">
                            <div class="title font-semibold text-slate-900">Инфьюрты</div>
                            Системные монеты, которые используются для оплаты различных функций системы
                        </div>
                    </div>
                </template>
            </vs-tooltip>
            <vs-tooltip bottom shadow not-hover v-model="activeUserMenu" border-thick primary>
                <div class="transform menu-toggle cursor-pointer group bg-slate-200 p-0 pr-3 flex items-center rounded-lg"
                     @click="activeUserMenu=!activeUserMenu">
                    <vs-avatar primary>
                        <template #text>
							{{getUsersData().name}}
                        </template>
                    </vs-avatar>
                    <span class="ml-4 text-sm font-semibold">{{getUsersData().name}}</span>
                    <i class="bx text-teal-600 text-lg ml-2"
                       :class="{
                            'bx-chevron-down': activeUserMenu === false,
                            'bx-chevron-up': activeUserMenu}"></i>
                </div>
                <template #tooltip>
                    <div class="content-tooltip cursor-pointer flex flex-col py-1 rounded-lg">
                        <template v-for="(link, index) in userMenu">
                            <router-link class="content-tooltip__item text-slate-500 cursor-pointer flex
                                    items-center p-2 hover:bg-slate-100 rounded-lg min-w-max" :to=link.path>
                                <i class="bx text-lg mr-1"
                                   :class="link.icon"></i> {{link.label}}
                            </router-link>
                        </template>
                        <hr class="my-1">
                        <div class="content-tooltip__item text-red-400 cursor-pointer flex items-center p-2
                            hover:bg-red-50 hover:text-red-600 rounded-lg" @click="logout">
                            <i class="bx bx-exit text-lg mr-1"></i> Выйти
                        </div>
                    </div>
                </template>
            </vs-tooltip>
        </template>
    </vs-navbar>
</template>

<script>
    import BlockNotification from "./BlockNotification";
	import store from "../../store/store";
	import router from "../../router";
	import {mapGetters} from 'vuex'

    export default {
        name: "app-header",
        components: {BlockNotification},
        data:() => ({
            activeUserMenu: false,
			userData: {}
        }),
        props: {
            userMenu: Array,
            links: Array
        },
		methods: {
        	...mapGetters(['getUsersData']),
			logout() {
				this.activeUserMenu = false
				store.dispatch("logout")
					.then(() => {
						router.push({
							name: "login",
						});
					});
			},
		},
	}
</script>

<style lang="scss">
    @import '../../../sass/variables';

    .menu-toggle{
        border-radius: 16px;
    }

    .content-tooltip{
        right: 20px !important;
    }

    .vs-navbar-content{
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
        position: sticky;

        .vs-navbar{
            height: 66px;

            &__center{
                height: 100%;
            }

            &__item{
                height: 100%;
                color: $gray-600;
                font-size: 14px;
                &.active {
                    background-color: transparentize($primary, 0.92);
                    color: $primary;
                }
            }

            &__link{
                height: 100%;
            }
        }

        & .vs-navbar__line{
            background: $primary;
        }
    }
</style>
