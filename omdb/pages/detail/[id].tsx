import React from 'react'
import { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

const Detail: NextPage = () => {
  return (
    <React.Fragment>
      <div className={styles.container} style={{ padding: '0 8rem', marginTop: '4rem' }}>
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            boxShadow: 'rgb(49 53 59 / 12%) 0px 1px 25px 6px',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '5px',
            padding: '20px'
          }}
        >
          <div>
            <div> <img src={detail.Poster} /> </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <div> Revenue </div>
              <div> { detail.BoxOffice } </div>
            </div>
            <div style={{ marginTop: '1rem' }}> Ratings </div>
            {detail.Ratings && detail.Ratings.map((item, index) => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
                key={index}
              >
                <div> { item.Source } </div>
                <div> { item.Value } </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginLeft: '1.5rem',
              width: '100%',
            }}
            className={styles.detailDescription}
          >
            <div className="title" style={{ fontSize: '2rem' }} > {detail.Title} </div>
            <div className="released"> {detail.Released}, {detail.Runtime} </div>
            <div className="genre" style={{ borderBottom: '1px solid black', paddingBottom: '.75rem' }}> {detail.Genre}  </div>
            <div className="director">
              <div style={{ marginBottom: '.2rem' }}> Director: </div>
              <div> { detail.Director } </div>
            </div>
            <div className="writer">
              <div style={{ marginBottom: '.2rem' }}> Writer: </div>
              <div> { detail.Writer } </div>
            </div>
            <div className="actor">
              <div style={{ marginBottom: '.2rem' }}> Actors: </div>
              <div> { detail.Actors } </div>
            </div>
            <div className="awards">
              <div style={{ marginBottom: '.2rem' }}> Awards: </div>
              <div> { detail.Awards } </div>
            </div>
            <div className="plot">
              <div style={{ marginBottom: '.2rem' }}> Plot: </div>
              <div> { detail.Plot } </div>
            </div>
            <div className="production">
              <div style={{ marginBottom: '.2rem' }}> Production: </div>
              <div> { detail.Production } </div>
            </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(async ({ store, ...ctx }) => {
//   const id = ctx.query.id
//   const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${id}&plot=full`)
//   store.dispatch({ type: types.UPDATE_DETAIL, payload: data })
// })

export default Detail
