import { useState } from 'react';
import styled from 'styled-components';
import {v4 as uuid} from "uuid"
import {DragDropContext, Draggable, DraggableProvided, DraggableStateSnapshot, Droppable, DroppableProvided,
 DroppableStateSnapshot} from "react-beautiful-dnd"

const App = () => {
  let inputData = [
    {
      id: uuid(),
    title: "fecting wayer"
    },
    {
      id: uuid(),
    title: "Cover wayer"
    },
    {
      id: uuid(),
    title: "fecting wayer"
    },
    {
      id: uuid(),
    title: "fecting wayer"
    }
  ]


  let mainData= {
    todo: {
      id: 'todo',
      Data: inputData,
    },
    progress: {
      id: 'progress',
      Data: inputData,
    },
    done: {
      id: 'done',
      Data: inputData,
    }
  }

  const [state, setState]: any = useState(mainData);

  const onEnd = (result: any) =>{
    console.log(result)

    const { source, destination } = result;
    if (!destination) return;

    if (destination.droppableId !== source.droppableId) {
      let soData = state[source.droppableId];
      let deData = state[destination.droppableId];

      let soItems = [...soData.data];
      let deItems = [...deData.data];

      let [remove] = soItems.splice(source.index, 1);
      deItems.splice(destination.index, 0, remove);

      setState({
        ...state,
        [source.droppableId]: {
          ...soData,
          data: soItems,
        },
        [destination.droppableId]: {
          ...deData,
          data: deItems,
        },
      });
    } else {
      let data = state[source.droppableId];
      let items = [...data.data];

      let [remove] = items.splice(source.index, 1);
      items.splice(destination.index, 0, remove);

      setState({
        ...state,
        [source.droppableId]: {
          ...data,
          data: items,
        },
      });
    };
  
  }
  return (
    <div>
      <Container>
        <Main>
         <DragDropContext onDragEnd={onEnd}>
          <Arrange>
            {Object.entries(state).map((props: any) =>(
                <ColumnHolder key={props[0]}>
                  <TopTitle> {props[0]}</TopTitle>

                  <div>
                    <Droppable droppableId={props[0]}>
                      {(
                        provided: DroppableProvided,
                        snapshot: DroppableStateSnapshot
                      ) =>(
                        <div 
                        {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{background: snapshot.isDraggingOver ? "lightgray" : "#FCEBEB",
                          
                          minHeight: "300px",
                          padding: "5px",
                          borderRadius: "5px",
                          transition: "all 350ms",}}>
                          <div>
                            {props[1].data.map((props: any, i: number) =>(
                               <div key={props.id}>
                               <Draggable
                                 draggableId={props.id}
                                 key={props.id}
                                 index={i}
                               >
                                 {(
                                   provided: DraggableProvided,
                                   snapshot: DraggableStateSnapshot
                                 ) => (
                                   <Card
                                     {...provided.dragHandleProps}
                                     {...provided.draggableProps}
                                     ref={provided.innerRef}
                                     style={{
                                       background: snapshot.isDragging
                                         ? "black"
                                         : "",
                                       color: snapshot.isDragging
                                         ? "white"
                                         : "",

                                       transition: "all 350ms",
                                       ...provided.draggableProps.style,
                                     }}
                                   >
                                     {props.title}
                                   </Card>
                                 )}
                               </Draggable>
                             </div>
                            ))}
                          </div>
                          {provided.placeholder}
                        </div>
                      )}

                    </Droppable>
                  </div>
                </ColumnHolder>
            ))}
          </Arrange>
         </DragDropContext>
        </Main>
      </Container>
    </div>
  )
}

export default App;
const Card=styled.div`
  
`
const TopTitle = styled.div`
  margin-bottom: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid silver;
`
const ColumnHolder = styled.div`
  width: 400px;
  border: 1px solid silver;
  border-radius: 5px;
  margin: 0 5px;
`
const Arrange = styled.div`
  display: flex;
`
const Main = styled.div`
  margin-top: 200px;
  width: 80%;
  min-height: 400px;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 50px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
