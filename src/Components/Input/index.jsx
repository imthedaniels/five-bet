import { ContainerInput, Container } from './styles'

const Input = (
  { name, value, type, placeholder, register, error },
  ...props
) => {
  return (
    <Container>
      <span>{name}</span>
      <ContainerInput isErrored={!!error}>
        {register ? (
          <input
            type={type}
            placeholder={placeholder}
            {...props}
            {...register(value)}
          />
        ) : (
          <input type={type} placeholder={placeholder} {...props} />
        )}
      </ContainerInput>
      <div className='error'>{!!error && <span>{error}</span>}</div>
    </Container>
  )
}

export default Input
