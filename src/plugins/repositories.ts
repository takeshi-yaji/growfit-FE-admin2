import { Context } from '@nuxt/types'
import NewsRepository from '~/repositories/news'
// Loginを追加
import LoginRepository from '~/repositories/login'

export type Repositories = {
  [key: string]: any
}

export default (
  { $axios }: Context,
  inject: (key: string, value: any) => void
) => {
  const repositories: Repositories = {
    news: NewsRepository($axios),
    // ここも追加
    login: LoginRepository($axios),
  }
  inject('repositories', repositories)
}
