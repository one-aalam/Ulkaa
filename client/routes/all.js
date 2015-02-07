Router.map(function() {

  this.route('home', {
    path: '/'
  });

/*
  this.route('dashboard', {
    path: '/dashboard',
    loginRequired: 'entrySignIn',
    waitOn: function() {
      return this.subscribe("items");
    },
    data: {
      items: Items.find({})
    },
    onAfterAction: function() {
      SEO.set({
        title: 'Dashboard | ' + SEO.settings.title
      });
    }
  });*/

  this.route('about', {
    path: '/about',
    data: function() {
      return {
          "content":"Anything"
      };
    }
  });

/*
  this.route('notFound', {
    path: '*',
    where: 'server',
    action: function() {
      this.response.statusCode = 404;
      this.response.end(Handlebars.templates['404']());
    }
  });*/

});