import React from "react"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea, SxProps, Theme } from "@mui/material"
import { type Event } from "../model/event"

interface EventCardProps {
  style?: SxProps<Theme> | undefined
  event?: Event
}
export default function EventCard(props: EventCardProps) {
  const { style, event } = props
  return (
    <Card sx={style}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={event?.imgUrl ?? ""}
          alt={event?.title ?? ""}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event?.title ?? ""}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {event?.description ?? ""}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
