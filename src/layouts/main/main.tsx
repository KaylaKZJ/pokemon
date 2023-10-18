import ScrollElement from 'components/scrollElement/scrollElement';
import TopNav from 'components/topNav/topNav';

export default MainLayout;

function MainLayout({ children }: IMainLayout) {
  return (
    <>
      <ScrollElement offset={90}>
        <TopNav />
      </ScrollElement>
      {children}
    </>
  );
}

interface IMainLayout {
  children: React.ReactNode;
}
