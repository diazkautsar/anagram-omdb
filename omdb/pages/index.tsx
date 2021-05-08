import styles from '../styles/Home.module.css'
import axios from 'axios'
import React, { ReactNode, useEffect } from 'react'
import { connect } from 'react-redux'
import * as types from '../store/types'
import { State } from '../store/reducer'
import { faVideo, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface StateProps {
  message: string
  list: types.list[]
}

interface DispatchProps {
  updateMessage: (message: string) => void
  updateList: (param: types.list[]) => void
}


type Props = StateProps & DispatchProps

const mapState = (state: State) => ({
  message: state.message,
  list: state.list,
})

const mapDispatch = {
  updateMessage: (message: string) => ({ type: types.UPDATE_MESSAGE, payload: message }),
  updateList: (param: types.list[]) => ({ type: types.UPDATE_LIST, payload: param })
}

function Home({ message, list, updateMessage, updateList }: Props) {
  const [searchTypeSelected, setSearchTypeSelected] = React.useState<'movie' | 'series' | 'episode' | null>(null)
  const [querySearch, setQuerySearch] = React.useState<string>('')

  const changeSearchType = (event: React.MouseEvent, param: 'movie' | 'series' | 'episode') => {
    event.preventDefault()
    setSearchTypeSelected(param)
  }

  const searchMovie = async (event: React.MouseEvent) => {
    event.preventDefault()
    await axios.get(`/api/fetchmovie?search=${querySearch}&type=${searchTypeSelected}`)
      .then(({ data }) => {
        const { data: response } = data
        updateList(response.Search)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectedButton}>
        <div
          style={{ backgroundColor: 'red' }}
          onClick={(e) => changeSearchType(e, 'movie')}
          className={styles.buttonMovie}
        >
          Movie
        </div>
        <div
          style={{
            backgroundColor: 'blue'
          }}
          onClick={(e) => changeSearchType(e, 'series')}
          className="series"
        >
          Series
        </div>
        <div
          style={{ backgroundColor: 'green' }}
          onClick={(e) => changeSearchType(e, 'episode')}
          className="episode"
        >
          Episode
        </div>
      </div>
      <div className={styles.searchBar}>
        <input type="name" value={querySearch} onChange={(e) => setQuerySearch(e.target.value)} />
        <button onClick={(e) => searchMovie(e)}> Search </button>
      </div>
      <div className={styles.list}>
        {list.map((item) => (
          <div key={item.imdbID}>
            <img style={{ width: '200px' }} src={item.Poster} />
            <div
              style={{
                maxWidth: '200px',
                textAlign: 'center',
              }}
            >
              {item.Title}
            </div>
            <div
              style={{
                marginTop: '.75rem',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <FontAwesomeIcon icon={faVideo} />
              <div> { item.Type } </div>
            </div>
            <div
              style={{
                marginTop: '.75rem',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
              <div> { item.Year } </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default connect<StateProps, DispatchProps>(mapState, mapDispatch)(Home)
