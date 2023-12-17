import React from 'react';
import { User } from '@/models/user.model';

interface Props {
  user?: User
}

const DefaultTemplate = (props: Props) => {
  return (
    <div>DefaultTemplate</div>

  )
}

export default DefaultTemplate