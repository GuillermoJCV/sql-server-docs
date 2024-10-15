```sql
CREATE TABLE Pedidos (
    PedidoID INT PRIMARY KEY,
    ClienteID INT,
    Fecha DATE,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ID)
);
```