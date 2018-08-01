import movie from 'view/movie/movie'
import movies from 'view/movie/movies'
import serie from 'view/movie/serie'
import series from 'view/movie/series'
import kids from 'view/movie/kids'
import channels from 'view/movie/channels'
import collection from 'view/movie/collection'
import search from 'view/movie/search'
import cast from 'view/movie/cast'

export default {
  movie: { screen: movie },
  movies: { screen: movies },
  serie: { screen: serie },
  series: { screen: series },
  kids: { screen: kids },
  channels: { screen: channels },
  collection: { screen: collection },
  search: { screen: search },
  cast: { screen: cast }
}