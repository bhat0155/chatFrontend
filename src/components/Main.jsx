const Main = ({ messages }) => {
    return (
      <div style={{
        flex: 1,
        overflowY: "auto",
        border: "1px solid white",
        maxHeight: "70vh"
      }}>
        <h2>Chat Messages</h2>
        {messages.map((item, index) => (
          <div key={index}>
            {item.firstName} sent {item.mssg}
          </div>
        ))}
      </div>
    );
  };
  
  export default Main;
  