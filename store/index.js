import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
		state: {
			info: ''
		},
		actions: {
			getInfo(content, value) {
				uni.request({
					url: `http://apis.juhe.cn/fapigx/caipu/query?key=a24cc50a02418c18fa78270b61f00895&word=${value}`,
					header: {
						   'custom-header': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res.data)
						content.commit('GETINFO', res.data.result.list)
					}
				})
			}
		},
		mutations: {
			GETINFO(state, value) {
				state.info = value
			}
		},
		getters: {
			
		}
})
export default store