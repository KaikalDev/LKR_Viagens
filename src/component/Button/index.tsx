import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  to?: string
  onClick?: () => void
}

const Button = ({
  children,
  type,
  title,
  onClick,
  variant = 'primary'
}: Props) => {
  if (type === 'link') {
    return (
      <S.ButtonLink
        type="button"
        $variant={variant}
        onClick={onClick}
        title={title}
      >
        {children}
      </S.ButtonLink>
    )
  } else {
    return (
      <S.ButtonContainer
        $variant={variant}
        type={type}
        title={title}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  }
}

export default Button
