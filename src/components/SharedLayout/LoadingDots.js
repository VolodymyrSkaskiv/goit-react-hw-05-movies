import { LoadingDots, Dot } from './SharedLayout.styled';

// додаємо індикатор завантаження
export const LoadingIndicator = () => {
  return (
    // додаємо анімацію для індикатора завантаження
    <LoadingDots>
      <Dot delay="0s" />
      <Dot delay=".2s" />
      <Dot delay=".4s" />
    </LoadingDots>
  );
};
