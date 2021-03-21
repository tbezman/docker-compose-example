package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/dgryski/trifles/uuid"
	"github.com/tbezman/docker-compose-example/api/graph/generated"
	"github.com/tbezman/docker-compose-example/api/graph/model"
)

func (r *mutationResolver) CreateTodo(ctx context.Context, input model.CreateTodoInput) (*model.Todo, error) {
	todo := &model.Todo{
		ID:          uuid.UUIDv4(),
		Title:       input.Title,
		Description: input.Description,
		Completed:   false,
		CreatedDate: time.Now().Format(time.RFC3339),
	}

	if err := r.Database.Save(todo).Error; err != nil {
		return nil, fmt.Errorf("could not save todo")
	}

	return todo, nil
}

func (r *mutationResolver) CompleteTodo(ctx context.Context, id string) (*model.Todo, error) {
	var err error

	if err = r.Database.Model(&model.Todo{}).Where("id = ?", id).Update("completed", true).Error; err != nil {
		return nil, fmt.Errorf("could not update todo with completed true")
	}

	foundTodo := &model.Todo{}
	if err = r.Database.Where("id = ?", id).First(foundTodo).Error; err != nil {
		return nil, fmt.Errorf("could not find todo after updating")
	}

	return foundTodo, nil
}

func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	var todos []*model.Todo

	if err := r.Database.Find(&todos).Error; err != nil {
		return nil, fmt.Errorf("could not get all todos")
	}

	return todos, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
