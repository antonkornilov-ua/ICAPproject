import { FaQuoteRight } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { QuotesData } from '../interfaces/quotes';

const QUOTES_API = 'https://api.quotable.io/random';



const Quote = () => {
    const [quoteInfo, setQuoteInfo] = useState<QuotesData>({text: '', author: ''});

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = () => {
        fetch(QUOTES_API)
            .then((response) => {
            return response.json()
            })
            .then((data) => {
                setQuoteInfo({
                    text: data.content,
                    author: data.author
            })
        })
    }

  return (
      <div>
          <div className='text-center bg-white p-4 rounded-md shadow-md'>
              <div className='text-xl mb-4'>
                  <FaQuoteRight className='text-blue-500 text-2xl' />
              </div>
              <p className='text-lg'>{quoteInfo.text}</p>
              <p className='text-blue-500 mt-2'>by {quoteInfo.author}</p>
          </div>
      </div>
  );
}

export default Quote