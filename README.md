# Room Cheatsheet

## Anmerkung
Annotationen sind Markierungen im Code, die festlegen, wie Datenbanktabellen und -spalten definiert und verwaltet werden sollen, wie z.B. `@Entity` für Tabellen und `@PrimaryKey` für eindeutige Schlüssel.

### Annotations
- **@Entity**: Wird dazu verwendet, um die Entity für die Datenbank zu definieren.
- **@PrimaryKey(autoGenerate=true)**: Da der PrimaryKey meistens eine ID ist, empfiehlt es sich, `autoGenerate` auf `true` zu setzen. Somit wird die ID automatisch hochgezählt nach jedem Eintrag.
- **@Query**: Hiermit werden die Abfragen für die RoomDB festgelegt. Für Abfragen wird SQL verwendet.

## Dependencies in die build.gradle hinzufügen
```kotlin
val room_version = "2.6.1"
implementation("androidx.room:room-runtime:$room_version")
annotationProcessor("androidx.room:room-compiler:$room_version")
```

## Enitiy erstellen | Todos.kt

Entitäten werden über Datenklassen definiert. Dazu wird `@Entity` verwendet, um die Klasse als Zeile in der Datenbank zu erstellen. Mit `@PrimaryKey` wird der Primärschlüssel markiert. Es ist empfehlenswert, `autoGenerate` auf true zu setzen, um IDs automatisch zu generieren.


Imports:

```kotlin
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.util.Date
````

Code Snippet:
```kotlin
@Entity
data class Todo{
  @PrimaryKey(autoGenerate=true)
  var id: Int,
  var name: String,
  var createdAt: Date
}
```

## DAO erstellen | TodoDao.kt

Für die Datenbank abfragen über Room können vorgefertigte oder selsbst Erstellte SQL-Abfragen verwendetwerden. 
Room selbst bietet auch fertige Abfragen wie das Löschen, Erstellen und Aktualisieren von Daten.
Diese werden mit den Annotationen `@Delete`, `@Insert`, `@Update` und der übergabe der Entity estellt.

Das Abfrage einer kompletten Tabelle als auch bestimmter Zeilen wird mit SQL erstellt. 
Zum erstellen einer eigenen Abfrage wird die Annotation `@Query()` verwendet. In den Klammern wird dann die gewünschte SQL-Abfrage als String eingesetzt.

Anmerkung: Es könne auch Parameter an die Abfrage übergeben werden.

Imports:
```kotlin
import androidx.room.Dao
import androidx.lifecycle.LiveData
import androidx.room.Query
import com.example.projectname.Todo
```

Code Snippet:
```kotlin
@Dao
interface TodoDao {

    @Query("SELECT * FROM Todo")
    fun getAllTodo(): LiveData<List<Todo>>

    // Diese Methode gibt einen Benutzer mit der angegebenen ID zurück.
    @Query("SELECT * FROM Todo WHERE id = :todoId")
    fun getTodoById(todoId: Int): LiveData<Todo>

    @Insert
    fun addTodo(todo: Todo)

    @Delete
    fun deleteTodo(id: Int)

    @Update
    fun updateTodo(todo: Todo)
}
```

## Datenbank definieren | TodoDatabase.kt


Im folgenden Beispiel wird die Datenbank definiert mit der Annotation @Database.
`[Todo::class]` zeigt an das die Entität Todo eine Entität ist die in der Datenbank verwenden wird.
Mit der Variable todoDao werden die einzelnen Datenbank Abfragen über den punkt operator zur Verfügung gestellt.


Imports:

```kotlin
import androidx.room.Database
import androidx.room.RoomDatabase
import com.example.projectname.TodoDao
import com.example.projectname.Todo
````

Code Snippet:
```kotlin
@Database(version = 1, entities = [Todo::class])
abstract class TodoListDatabase  : RoomDatabase() {
    abstract val todoDao : TodoDao
}

```

## Datenbank initalisieren | MainActivity.kt


```kotlin
In der `MainActivity` wird über Lazy Initialization die Room-Datenbank `db` erstellt. Dies geschieht mit `Room.databaseBuilder`, wobei der `applicationContext`, die `TodoDatabase`-Klasse und der Name der Datenbank angegeben werden. Damit wird sichergestellt, dass die Datenbank erstellt wird, wenn sie benötigt wird, was effizientere Ressourcennutzung ermöglicht.
```

Code Snippet:
```kotlin
class MainActivity : ComponentActivity() {
    private val db by lazy {
        Room.databaseBuilder(
            applicationContext,
            TodoDatabase::class.java,
            "database.db"
        ).build()

    }
}
```

