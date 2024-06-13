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

Entities definieren und Todo.kt erstellen
Repräsentiert das erstellte Objekt.

## Enitiy erstellen | Todo.kt

```kotlin
@Entity
data class Todo{
  @PrimaryKey(autoGenerate=true)
  var id: Int,
  var title:String,
  var createdAt: Date
}
'''

## DAO erstellen | TodoDao.kt

Room verwendet SQL-Abfragen, die mit `@Query` definiert werden. Diese SQL-Abfragen spezifizieren die Datenbankabfragen für die Entity in der Datenbank.

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
    @Query("SELECT * FROM TODO")
    fun getAllTodo(): LiveData<List<Todo>>

    @Insert
    fun addTodo(todo: Todo)

    @delete
    fun deleteTodo(id: Int)
}
```

## Zugriff auf Datenbank erstellen erstellen | TodoDatabase.kt

Imports:
```kotlin
import androidx.room.Database
import com.example.projectname.Todo
```

Code Snippet:
```kotlin
@Database(entities = [Todo::class], version = 1)
abstract class TodoDatabase {
    companion object {
        const val NAME = "Todo_DB"
    }
    
    abstract fun getTodoDAO(): TodoDao
}
```

## Datenbank initialisieren | MainApplication.kt

Anmerkung:Kann in einem eigenen File oder der MainActivity.kt erstellt werden

Mit folgendem Code kann die Datenbank initalisiert werden
```
class MainApplication:Application(){
    
     companion object {
lateinit var todoDatabase:TodoDatabase {
     } 

    override fun onCreate() {
           super.onCreate()
           Room.databaseBuilder(
           applicationContext,
          TodoDatabase::classe.java,
          TodoDatabase.NAME
).build
     }
}
```


