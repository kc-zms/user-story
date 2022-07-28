import { Card, CardMedia, LinearProgress, Typography } from '@mui/material'
import React from 'react'

interface BookData {
  id: string
  img: string
  title: string
  author: string
  reads: string
}

interface Props {
  bookData: BookData
}

const BookGridItem = ({bookData}: Props) => {
  return (
    <div>
      <Card>
        <CardMedia>
          <img src={bookData.img} />
        </CardMedia>

        <Typography>{bookData.title}</Typography>
        <Typography>{bookData.author}</Typography>
        <LinearProgress />
      </Card>
    </div>
  )
}

export default BookGridItem