import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen, 
  onRequestClose
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  
  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState(0);
  const [ category, setCategory ] = useState('');
  const [ type, setType ] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose()
  }
  
  return (    
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
        <button type="button">
          <img 
            src={closeImg}
            alt=""
            onClick={onRequestClose}
            className="react-modal-close"
          />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>
        
          <input 
            placeholder='Título'
            onChange={(event) => { setTitle(event.target.value) }}
          />

          <input
            type="number"
            placeholder='Valor'
            onChange={(event) => { setAmount(Number(event.target.value)) }}
          />

          <TransactionTypeContainer>
            <RadioBox 
              type="button" 
              isActive={type === 'deposit'} 
              onClick={() => { setType('deposit') }}
              activeColor="green"
            > 
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox 
              type="button" 
              isActive={type === 'withdraw'}
              onClick={() => { setType('withdraw') }}
              activeColor="red"
            > 
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
        
          <input 
            type="text"
            placeholder='Categoria'
            onChange={(event) => { setCategory(event.target.value) }}
          />

          <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}