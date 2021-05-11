import styles from '../styles/Home.module.css'
import Link from 'next/link'
import axios from 'axios'
import React, { ReactNode, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import { faVideo, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from '@material-ui/core'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import { updateList } from '../store/slices/movieSlice'


function Home() {
  const [searchTypeSelected, setSearchTypeSelected] = React.useState<'movie' | 'series' | 'episode' | null>(null)
  const [querySearch, setQuerySearch] = React.useState<string>('')
  const [imageUrl, setImageUrl] = React.useState<string>('')
  const [open, setOpen] = React.useState<boolean>(false)

  const list = useAppSelector((state) => state.movie.list)
  const dispatch = useAppDispatch()

  const movieState = useAppSelector((state) => state.movie)

  const changeSearchType = (event: React.MouseEvent, param: 'movie' | 'series' | 'episode') => {
    event.preventDefault()
    setSearchTypeSelected(param)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', loadMore)
    return () => {
      window.removeEventListener('scroll', loadMore)
    }
  }, [list])

  const searchMovie = (event: React.MouseEvent) => {
    event.preventDefault()
    if (!querySearch) {
      return
    }

    // updateTypeToSearch(searchTypeSelected)
    // updateStateQuerySearch(querySearch)

    fetch()
  }

  const fetch = async () => {
    await axios.get(`/api/fetchmovie?search=${querySearch}&type=${searchTypeSelected}&page=${1}`)
      .then(({ data }) => {
        // dispatch(updateList(data.Search))
        // console.log(data)
        const { data: response } = data
        dispatch(updateList(response.Search))
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getPosterImage = async (event: React.MouseEvent, id: string) => {
    event.preventDefault()
    await axios.get(`/api/poster/${id}`)
      .then(({ data }) => {
        const { data: imageUrl } = data
        setImageUrl(imageUrl)
        setOpen(true)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const loadMore = (event: MouseEvent) => {
    event.preventDefault()
    if (
      window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight
    ) {
      // Do load more content here!
      console.log('disini')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectedButton}>
        <div
          style={{ backgroundColor: 'pink' }}
          onClick={(e) => changeSearchType(e, null)}
          className={!searchTypeSelected ? 'active-button-all' : undefined}
        >
          Select All
        </div>
        <div
          style={{ backgroundColor: 'red' }}
          onClick={(e) => changeSearchType(e, 'movie')}
          className={searchTypeSelected === 'movie' ? 'active-button-movie' : undefined}
        >
          Movie
        </div>
        <div
          style={{
            backgroundColor: 'blue'
          }}
          onClick={(e) => changeSearchType(e, 'series')}
          className={searchTypeSelected === 'series' ? 'active-button-series' : undefined}
        >
          Series
        </div>
        <div
          style={{ backgroundColor: 'green' }}
          onClick={(e) => changeSearchType(e, 'episode')}
          className={searchTypeSelected === 'episode' ? 'active-button-episode' : undefined}
        >
          Episode
        </div>
      </div>
      <div className={styles.searchBar}>
        <input type="name" value={querySearch} onChange={(e) => setQuerySearch(e.target.value)} />
        <button onClick={(e) => searchMovie(e)}> Search </button>
      </div>
      <div className={styles.list}>
        {list && list.map((item) => (
          <div key={item.imdbID}>
            <img
              style={{ width: '200px' }}
              src={item.Poster}
              onClick={(e) => getPosterImage(e, item.imdbID)}
            />
            <Link href={`/detail/${item.imdbID}`}>
              <div
                style={{
                  maxWidth: '200px',
                  textAlign: 'center',
                }}
              >
                {item.Title}
              </div>
            </Link>
            <Link href={`/detail/${item.imdbID}`}>
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
            </Link>
            <Link href={`/detail/${item.imdbID}`}>
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
            </Link>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%'
          }}
          onClick={() => (setOpen(false))}
        >
          <img
            src={imageUrl}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              margin: 'auto'
            }}
          />
        </div>
      </Modal>
    </div>
  )
}

export default connect()(Home)
