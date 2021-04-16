import React from 'react'
import { Button, Grid, Header, Segment } from 'semantic-ui-react'

const Calculator = ({ onMinus, onPlus, onDivide, onReset }) => {
  const [value, setValue] = React.useState(0)
  const plus = (player) => {
    return () => {
      onPlus && onPlus(player, value)
      clearCalc()
    }
  }
  const minus = (player) => {
    return () => {
      onMinus && onMinus(player, value)
      clearCalc()
    }
  }
  const divideBy2 = (player) => {
    return () => {
      onDivide && onDivide(player, 2)
      clearCalc()
    }
  }
  const setNumber = (number) => {
    return () => {
      if(value === 0) { setValue(number) }
      else { setValue(parseInt(value.toString() + number.toString())) }
    }
  }
  const resetLPs = () => {
    onReset && onReset()
    clearCalc()
  }
  const clearCalc = () => {
    setValue(0)
  }

  return <>
    <Segment attached='top'>
      <Header textAlign='center'>{value}</Header>
    </Segment>
    <Segment attached>
      <Grid padded stretched>
        <Grid.Column width={7}>
          <Button.Group>
            <Button onClick={plus(0)} icon='percent' color='orange' />
            <Button onClick={minus(0)} icon='minus' color='red' />
            <Button onClick={divideBy2(0)} icon='plus' color='green' />
          </Button.Group>
        </Grid.Column>
        <Grid.Column width={2}/>
        <Grid.Column width={7}>
          <Button.Group>
            <Button onClick={plus(1)} icon='plus' color='green' />
            <Button onClick={minus(1)} icon='minus' color='red' />
            <Button onClick={divideBy2(1)} icon='percent' color='orange' />
          </Button.Group>
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={4}>
          <Button onClick={setNumber(7)} fluid basic color='grey'>7</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={setNumber(8)} fluid basic color='grey'>8</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={setNumber(9)} fluid basic color='grey'>9</Button>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={4}>
          <Button onClick={setNumber(4)} fluid basic color='grey'>4</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={setNumber(5)} fluid basic color='grey'>5</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={setNumber(6)} fluid basic color='grey'>6</Button>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={4}>
          <Button onClick={setNumber(1)} fluid basic color='grey'>1</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={setNumber(2)} fluid basic color='grey'>2</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={setNumber(3)} fluid basic color='grey'>3</Button>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={4}>
          <Button onClick={clearCalc} fluid basic color='grey'>C</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={setNumber(0)} fluid basic color='grey'>0</Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={resetLPs} fluid basic icon='refresh' color='grey'></Button>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
    </Segment>
  </>
}

export default Calculator;
