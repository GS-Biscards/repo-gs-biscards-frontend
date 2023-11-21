import { User } from '@/models/user.model'
import React from 'react'

interface Props {
  user?: User
}

const DefaultTemplate = (props: Props) => {
  return (
    <div>DefaultTemplate</div>

  )
}

export default DefaultTemplate