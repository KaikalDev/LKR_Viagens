import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit' | 'reset'
  title: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'icon'
  to?: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  children,
  type,
  title,
  onClick,
  variant = 'primary',
  disabled
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
  } else if (variant == 'icon') {
    return (
      <S.ButtonIcon
        disabled={disabled}
        type={type}
        onClick={onClick}
        title={title}
      >
        {children}
      </S.ButtonIcon>
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
