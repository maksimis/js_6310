import './App.css'
import Button from './components/Button';
import Card from './components/Card';


// Использование
function App() {
    return (
        <div>
            <Button 
                text="Нажми меня"
                onClick={() => console.log('Клик!')}
                variant="primary"
            />
            
            <Card 
                title="Информация о пользователе"
                footer={<Button text="Сохранить" onClick={() => {}} />}
            >
                <p>Это содержимое карточки</p>
                <p>Дети компонента передаются как children</p>
            </Card>
        </div>
    );
}

export default App
