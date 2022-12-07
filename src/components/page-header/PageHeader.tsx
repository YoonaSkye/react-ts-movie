// styles
import './page-header.scss';
import BgIamge from '../../assets/footer-bg.jpg';

type PageHeaderProps = {
  children?: React.ReactNode;
};

const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <div
      className="page-header"
      style={{
        backgroundImage: `url(${BgIamge})`,
      }}
    >
      <h2>{children}</h2>
    </div>
  );
};

export default PageHeader;
