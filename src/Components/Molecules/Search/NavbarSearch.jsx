const Search = () => {
  return (
    <div className='nav-search'>
      <div className='nav-search-input'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14V14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z'
            fill='#AAAAAA'
          />
        </svg>
        <input type='text' name='search' placeholder='Search product...' />
      </div>

      <svg
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='48' height='48' rx='12' fill='#D38669' fillOpacity='0.1' />
        <path
          d='M19 30C17.9 30 17.01 30.9 17.01 32C17.01 33.1 17.9 34 19 34C20.1 34 21 33.1 21 32C21 30.9 20.1 30 19 30ZM13 14V16H15L18.6 23.59L17.25 26.04C17.09 26.32 17 26.65 17 27C17 28.1 17.9 29 19 29H31V27H19.42C19.28 27 19.17 26.89 19.17 26.75L19.2 26.63L20.1 25H27.55C28.3 25 28.96 24.59 29.3 23.97L32.88 17.48C32.96 17.34 33 17.17 33 17C33 16.45 32.55 16 32 16H17.21L16.27 14H13ZM29 30C27.9 30 27.01 30.9 27.01 32C27.01 33.1 27.9 34 29 34C30.1 34 31 33.1 31 32C31 30.9 30.1 30 29 30Z'
          fill='#D38669'
        />
      </svg>
    </div>
  );
};

export default Search;
