import Block from "~src/utils/block";
import template from './error-block.template';

interface IErrorBlockProps {
  title: string;
  subtitle: string;
  linkHref: string;
  linkText: string;
}

export default class ErrorBlock extends Block<IErrorBlockProps>{
  constructor(props: IErrorBlockProps) {
    super('div', props);
  }

  protected getAttributes() {
    return {
      class: 'error-block',
    };
  }

  public render() {
    return this.compile(template, {
      title: this.props.title,
      subtitle: this.props.subtitle,
      linkHref: this.props.linkHref,
      linkText: this.props.linkText,
    });
  }
}