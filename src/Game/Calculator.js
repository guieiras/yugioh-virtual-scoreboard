import React from 'react'
import { Button, Grid, Header, Segment } from 'semantic-ui-react'

const Calculator = ({ onMinus, onPlus, onDivide, onReset, onSet }) => {
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
  const divideBy = (player) => {
    return () => {
      onDivide && onDivide(player, value || 2)
      clearCalc()
    }
  }
  const setLP = (player) => {
    return () => {
      onSet && onSet(player, value)
      clearCalc()
    }
  }
  const setNumber = (number) => {
    return () => {
      if (value === 0) { setValue(number) }
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
      <div style={{ margin: '5px -10px 25px', display: 'flex', justifyContent: 'space-around' }}>
        <Button.Group style={{ padding: 0 }}>
          <Button onClick={setLP(0)} icon='share' color='grey' />
          <Button onClick={divideBy(0)} icon='battery half' color='orange' />
          <Button onClick={minus(0)} icon='minus' color='red' />
          <Button onClick={plus(0)} icon='plus' color='green' />
        </Button.Group>
        <Button.Group style={{ padding: 0 }}>
          <Button onClick={plus(1)} icon='plus' color='green' />
          <Button onClick={minus(1)} icon='minus' color='red' />
          <Button onClick={divideBy(1)} icon='battery half' color='orange' />
          <Button onClick={setLP(1)} icon='share' color='grey' />
        </Button.Group>
      </div>
      <Grid columns={3}>
        <Grid.Column>
          <Button onClick={setNumber(7)} fluid basic color='grey'>7</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={setNumber(8)} fluid basic color='grey'>8</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={setNumber(9)} fluid basic color='grey'>9</Button>
        </Grid.Column>
      </Grid>
      <Grid columns={3}>
        <Grid.Column>
          <Button onClick={setNumber(4)} fluid basic color='grey'>4</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={setNumber(5)} fluid basic color='grey'>5</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={setNumber(6)} fluid basic color='grey'>6</Button>
        </Grid.Column>
      </Grid>
      <Grid columns={3}>
        <Grid.Column>
          <Button onClick={setNumber(1)} fluid basic color='grey'>1</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={setNumber(2)} fluid basic color='grey'>2</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={setNumber(3)} fluid basic color='grey'>3</Button>
        </Grid.Column>
      </Grid>
      <Grid columns={3}>
        <Grid.Column>
          <Button onClick={clearCalc} fluid basic color='grey'>C</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={setNumber(0)} fluid basic color='grey'>0</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={resetLPs} fluid basic icon='refresh' color='grey'></Button>
        </Grid.Column>
      </Grid>
    </Segment>
  </>
}

export default Calculator;
