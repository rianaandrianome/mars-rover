import React, { useState, useMemo } from 'react';

import './assets/scss/main.scss';

import MainGrid from './components/MainGrid/MainGrid';
import Rover from './components/Rover/Rover';
import StatusPanel from './components/StatusPanel/StatusPanel';

function App() {
  const grid = { width: 10, height: 10 };
  const width = 100 / grid.width;
  const height = 100 / grid.height;

  const gridSize = useMemo(() => {
    return { width, height };
  }, [height, width]);

  const defaultDirection = "N";
  const defaultPosition = { x: 0, y: 0 };
  const commands = ["f", "l", "r"];

  const [direction, setDirection] = useState(defaultDirection);
  const [position, setPosition] = useState(defaultPosition);
 
  return (
    <div className="App" data-testid="app">
      <div className="mainContainer row">
        <div className="col-lg-8 mainGrid-wrapper">
          <MainGrid size={gridSize} />
          <Rover
            direction={direction}
            position={position}
            gridSize={gridSize}
          />
        </div>
        <div className="col-lg-4 statusPanel-wrapper">
          <StatusPanel
            commands={commands}
            direction={defaultDirection}
            position={defaultPosition}
            gridSize={gridSize}
            move={(dir:string, pos:any) => {
              setDirection(dir);
              setPosition(pos);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
